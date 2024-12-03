import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as queryString from 'query-string';
import { Observable } from 'rxjs';
import { CopyFileRequest, CopyToProviderRequest, CopyToXcorpRequest, FileProvider, FileProviderAddRequest, FileResponse, FolderUpsert, List2Res, Pageable, ProviderFile, ProviderFileSearchRequest } from 'src/app/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FileProviderService {
  constructor(
    private http: HttpClient,
  ) { }

  addProvider(payload: FileProviderAddRequest) {
    return this.http.post<FileProvider>(`${environment.apiUrl}/file-providers/`, payload);
  }

  rename(providerId: string, fileId: string, name: string) {
    return this.http.patch(
      `${environment.apiUrl}/file-providers/${providerId}/file/rename`, {
        key: fileId,
        name
      }
    );
  }

  getProviders(pageable: Pageable): Observable<List2Res<FileProvider>> {
    const params = queryString.stringify(pageable);

    return this.http.get<List2Res<FileProvider>>(`${environment.apiUrl}/file-providers/?${params}`);
  }

  getFilesFromProvider(providerId: number, pageable: Pageable, payload: ProviderFileSearchRequest = {}) {
    const params = queryString.stringify({ ...pageable, ...payload });

    return this.http.get<List2Res<ProviderFile>>(`${environment.apiUrl}/file-providers/${providerId}/files/list?${params}`);
  }

  deleteProvider(id) {
    return this.http.delete<any>(`${environment.apiUrl}/file-providers/${id}`);
  }

  copyFile(payload: CopyFileRequest) {
    return this.http.post<FileResponse[]>(`${environment.apiUrl}/files/copy`, payload);
  }

  moveFile(payload: CopyFileRequest) {
    return this.http.put<FileResponse[]>(`${environment.apiUrl}/files/move`, payload);
  }

  copyToXcorp(payload: CopyToXcorpRequest) {
    return this.http.post<ProviderFile>(`${environment.apiUrl}/file-providers/copy-to-xcorp`, payload);
  }

  copyToProvider(payload: CopyToProviderRequest) {
    return this.http.post<ProviderFile>(`${environment.apiUrl}/file-providers/copy-to-provider`, payload);
  }

  createFolder(fileProviderId: any, parentId: any, payload: FolderUpsert) {
    return this.http.post<ProviderFile>(`${environment.apiUrl}/file-providers/${fileProviderId}/file/${parentId}/create-dir`, payload);
  }

  uploadFile(fileProviderId: number, parentKey: string, files: File[]): Observable<HttpEvent<ProviderFile[]>> {
    const formData = new FormData();

    formData.append('parentKey', `${parentKey}`);
    files.forEach((file) => {
      formData.append('multipartFiles', file);
    });

    return this.http.post<ProviderFile[]>(`${environment.apiUrl}/file-providers/${fileProviderId}/upload`,
      formData,
      {
        reportProgress: true,
        observe: 'events'
      }
    );
  }

  download(fileProviderId: number, fileIds: number[]) {
    const params = queryString.stringify({ fileIds });

    return this.http.get<Blob>(`${environment.apiUrl}/file-providers/${fileProviderId}/download?${params}`, {
      observe: 'events',
      reportProgress: true,
      responseType: 'blob' as 'json',
    });
  }

  delete(fileProviderId: number, keys: string[]) {
    return this.http.request('delete', `${environment.apiUrl}/file-providers/${fileProviderId}/file/delete`, { body: { keys } });
  }
}
