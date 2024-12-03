import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as queryString from 'query-string';
import { Observable, Subject, catchError, forkJoin, of } from 'rxjs';
import { finalize, map, switchMap } from 'rxjs/operators';
import { UtilService } from 'src/app/core';
import {
  CompanyStorage,
  FileAuthorizationHeaderResponse,
  FileAuthorizationResponse,
  FileHistoryResponse,
  FileItem, FilePermission, FileResponse, FileSearchRequest, FolderSetting, FolderUpsert, GetLinkResponse, List2Res,
  MoveFileRequest, Pageable, SendMailSharedUserRequest, ShareFileRequest, ShareFileResponse, SharingItemResponse,
  ShortCutUpsert, UpdateShareFileRequest
} from 'src/app/shared';
import { BaseAttachment } from 'src/app/shared/_models/attachment.model';
import { environment } from 'src/environments/environment';
import { GetStoragePayload } from '../_models/document-storage-file';

@Injectable({
  providedIn: 'root'
})

export class FileService {
  public loading$ = new Subject<boolean>();

  constructor(
    private http: HttpClient,
  ) { }

  searchFile(payload: FileSearchRequest, pageable: Pageable) {
    const params = queryString.stringify({ ...payload, ...pageable });

    return this.http.get<List2Res<FileResponse>>(`${environment.apiUrl}/files/search?${params}`);
  }

  getFile(fileId: number) {
    return this.http.get<FileResponse>(`${environment.apiUrl}/files/${fileId}/get-file`);
  }

  getSystemFolders(pageable: Pageable) {
    const params = queryString.stringify(pageable);
    return this.http.get<List2Res<FileItem>>(`${environment.apiUrl}/files/system?${params}`);
  }

  getProjects(payload: FileSearchRequest, pageable: Pageable): Observable<List2Res<FileItem>> {
    const params = queryString.stringify({ ...payload, ...pageable });

    this.loading$.next(true);
    return this.http.get<List2Res<FileItem>>(`${environment.apiUrl}/files/projects?${params}`).pipe(
      finalize(() => this.loading$.next(false)),
    );
  }

  getCompanyDocument(payload: FileSearchRequest, pageable: Pageable): Observable<List2Res<FileItem>> {
    const params = queryString.stringify({ ...payload, ...pageable });

    this.loading$.next(true);
    return this.http.get<List2Res<FileItem>>(`${environment.apiUrl}/files/company-document?${params}`).pipe(
      finalize(() => this.loading$.next(false)),
    );
  }

  getOkrDocument(payload: FileSearchRequest, pageable: Pageable): Observable<List2Res<FileItem>> {
    const params = queryString.stringify({ ...payload, ...pageable });
    this.loading$.next(true);
    const getUrl = `${environment.apiUrl}/files/okr-document?${params}`;
    return this.http.get<List2Res<FileItem>>(getUrl).pipe(
      finalize(() => this.loading$.next(false))
    );
  }

  getHrDocument(payload: FileSearchRequest, pageable: Pageable): Observable<List2Res<FileItem>> {
    const params = queryString.stringify({ ...payload, ...pageable });
    this.loading$.next(true);
    const getUrl = `${environment.apiUrl}/files/hr-document?${params}`;
    return this.http.get<List2Res<FileItem>>(getUrl).pipe(
      finalize(() => this.loading$.next(false))
    );
  }

  getChildFiles(parentId: number, payload: FileSearchRequest, pageable: Pageable): Observable<List2Res<FileResponse>> {
    const params = queryString.stringify({ parentId, ...payload, ...pageable });

    this.loading$.next(true);
    return this.http.get<List2Res<FileResponse>>(`${environment.apiUrl}/files/${parentId}/?${params}`).pipe(
      finalize(() => this.loading$.next(false)),
    );
  }

  createFolder(parentId: number, payload: FolderUpsert) {
    this.loading$.next(true);
    return this.http.post<FileResponse>(`${environment.apiUrl}/files/${parentId}/create-dir`, payload).pipe(
      finalize(() => this.loading$.next(false)),
    );
  }

  createCompanyFolder(payload: FolderUpsert) {
    this.loading$.next(true);
    return this.http.post<FileResponse>(`${environment.apiUrl}/files/company-document/create-dir`, payload).pipe(
      finalize(() => this.loading$.next(false)),
    );
  }

  createShortcut(folderId: number, payload: ShortCutUpsert) {
    this.loading$.next(true);
    return this.http.post<FileResponse>(`${environment.apiUrl}/files/${folderId}/add-shortcut`, payload).pipe(
      finalize(() => this.loading$.next(false)),
    );
  }

  moveFile(payload: MoveFileRequest) {
    this.loading$.next(true);
    return this.http.put<FileResponse[]>(`${environment.apiUrl}/files/move`, payload)
      .pipe(finalize(() => this.loading$.next(false)));
  }

  download(fileIds: number[]) {
    const params = queryString.stringify({ fileIds });

    this.loading$.next(true);
    return this.http.get<Blob>(`${environment.apiUrl}/files/download?${params}`, {
      observe: 'events',
      reportProgress: true,
      responseType: 'blob' as 'json',
    })
      .pipe(finalize(() => this.loading$.next(false)));
  }

  // openFile(fileId: string | number) {
  //   this.loading$.next(true);
  //   return this.http.get(`${environment.apiUrl}/files/${fileId}/open-file`, {
  //     observe: 'response',
  //     responseType: 'blob'
  //   })
  //     .pipe(finalize(() => this.loading$.next(false)));
  // }

  delete(fileIds: number[]) {
    return this.http.request('delete', `${environment.apiUrl}/files/delete`, { body: fileIds });
  }

  permanentlyDelete(fileIds: number[]) {
    return this.http.request('delete', `${environment.apiUrl}/files/permanently-delete`, { body: fileIds });
  }

  restoreFile(ids: number[]) {
    return this.http.post(`${environment.apiUrl}/files/recycle-bin/restore`, { ids });
  }

  uploadFile(parentId: number, files: File[]): Observable<HttpEvent<FileResponse[]>> {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append('multipartFiles', file, file.name);
    });

    this.loading$.next(true);
    return this.http.post<FileResponse[]>(`${environment.apiUrl}/files/${parentId}/upload`,
      formData,
      {
        reportProgress: true,
        observe: 'events'
      }
    ).pipe(finalize(() => this.loading$.next(false)));
  }

  shareFile(payload: ShareFileRequest) {
    this.loading$.next(true);
    return this.http.post<any>(`${environment.apiUrl}/files/share`, payload)
      .pipe(finalize(() => this.loading$.next(false)));
  }

  deleteShareFile(ids: number[]) {
    this.loading$.next(true);
    return this.http.request('delete', `${environment.apiUrl}/files/shares/delete`, { body: ids })
      .pipe(finalize(() => this.loading$.next(false)));
  }

  updateShareFile(payload: UpdateShareFileRequest) {
    this.loading$.next(true);
    return this.http.put<any>(`${environment.apiUrl}/files/shares/edit`, payload)
      .pipe(finalize(() => this.loading$.next(false)));
  }

  getFileShareInfo(fileIds: number[]) {
    const params = queryString.stringify({ fileIds });
    this.loading$.next(true);
    return this.http.get<ShareFileResponse[]>(`${environment.apiUrl}/files/shares?${params}`).pipe(
      finalize(() => this.loading$.next(false)),
    );
  }

  createLinkShare(fileIds: number[]) {
    this.loading$.next(true);
    return this.http.post<GetLinkResponse[]>(`${environment.apiUrl}/files/create-link-share`, fileIds)
      .pipe(finalize(() => this.loading$.next(false)));
  }

  getShareTarget(fileIds: number[], keyword: string = ''): Observable<List2Res<SharingItemResponse>> {
    const params = queryString.stringify({ fileIds, keyword });

    this.loading$.next(true);
    return this.http.get<List2Res<SharingItemResponse>>(`${environment.apiUrl}/files/sharing-user-group-team?${params}`).pipe(
      finalize(() => this.loading$.next(false)),
    );
  }

  getByCode(code: string) {
    const params = queryString.stringify({ code });
    this.loading$.next(true);
    return this.http.get<FileResponse>(`${environment.apiUrl}/files/get-by-code?${params}`).pipe(
      finalize(() => this.loading$.next(false)),
    );
  }

  getById(fileId: number) {
    this.loading$.next(true);
    return this.http.get<FileResponse>(`${environment.apiUrl}/files/${fileId}`).pipe(
      finalize(() => this.loading$.next(false)),
    );
  }

  getAuthorization(url: string) {
    return this.http.post<FileAuthorizationResponse[]>(`${environment.apiUrl}/files/get-authorization`, { urls: [url] });
  }

  getAuthorizations(urls: string[]) {
    return this.http.post<FileAuthorizationResponse[]>(`${environment.apiUrl}/files/get-authorization`, { urls });
  }

  getAuthorizationHeader(url: string) {
    return this.http.post<FileAuthorizationHeaderResponse[]>(`${environment.apiUrl}/files/get-authorization-header`, { urls: [url] });
  }

  getMultiAuthorizationHeader(urls: string[]) {
    return this.http.post<FileAuthorizationHeaderResponse[]>(`${environment.apiUrl}/files/get-authorization-header`, { urls });
  }

  getAuthenticatedUrl(url: string) {
    return this.getAuthorizationHeader(url)
      .pipe(switchMap((payload: FileAuthorizationHeaderResponse[]) => {
        return this.getObjectURL(payload[0]);
      }));
  }

  getAuthenticatedUrls(urls: string[]): Observable<string[]> {
    return this.getMultiAuthorizationHeader(urls).pipe(
      switchMap((headers: FileAuthorizationHeaderResponse[]) => {
        const requests = [];
        headers.forEach( (header, index) => {
          requests.push(this.getObjectURL(header).pipe(
            catchError((error) => {
              return of(null);
            })
          ));
        })
        return forkJoin(requests);
      })
    );
  }

  getAttachmentObjectURL(attachment: BaseAttachment) {
    return this.getAuthenticatedUrl(attachment.url).pipe(map(objectUrl => ({ objectUrl, ...attachment })));
  }

  getObjectURL(payload: FileAuthorizationHeaderResponse) {
    const headers = new HttpHeaders({
      'Authorization': payload.authorization,
      // 'host': 'dev-upload-xcorp.s3.ap-southeast-1.amazonaws.com',
      'x-amz-content-sha256': payload.xamzContentSha256,
      'x-amz-date': payload.xamzDate,
    });
    return this.http.get(payload.url, {
      responseType: 'blob',
      headers
    }).pipe(
      map(blob => {
        const url = URL.createObjectURL(blob);
        return url;
      })
    );
  }

  settingFolder(id: number, bodyRequest: FolderSetting) {
    return this.http.put(`${environment.apiUrl}/files/${id}/set-icon`, bodyRequest);
  }

  sendMailSharedUser(payload: SendMailSharedUserRequest) {
    return this.http.post(
      `${environment.apiUrl}/files/send-shared-user`,
      payload
    );
  }

  getFilesPermission(fileIds) {
    const params = queryString.stringify({ fileIds });
    return this.http.get<{permission: FilePermission}>(
      `${environment.apiUrl}/files/check-permission-files?${params}`
    );
  }

  rename(fileId: number, name: string) {
    return this.http.put(
      `${environment.apiUrl}/files/${fileId}/rename`, {
        name
      }
    );
  }

  getCompanyStorage() {
    return this.http.get<CompanyStorage>(`${environment.apiUrl}/files/storage`);
  }

  getStorageFiles(payload: GetStoragePayload, pageable: Pageable): Observable<List2Res<FileResponse>> {
    const params = queryString.stringify({...payload, ...pageable});
    return this.http.get<List2Res<FileResponse>>(`${environment.apiUrl}/files/storage-management?${params}`);
  }

  getTrashFiles(payload: {keyword?: string}, pageable: Pageable): Observable<List2Res<FileResponse>> {
    const params = queryString.stringify({...payload, ...pageable});
    return this.http.get<List2Res<FileResponse>>(`${environment.apiUrl}/files/recycle-bin/search?${params}`);
  }

  getRecentFiles(payload: {keyword?: string}, pageable: Pageable): Observable<List2Res<FileHistoryResponse>> {
    const params = queryString.stringify({...payload, ...pageable});
    return this.http.get<List2Res<FileHistoryResponse>>(`${environment.apiUrl}/files/recent?${params}`);
  }

  emptyRecycleBin() {
    return this.http.delete(`${environment.apiUrl}/files/empty-recycle-bin`);
  }
}
