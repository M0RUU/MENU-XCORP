import { HttpEventType, HttpResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

import { forEach, isEmpty, reduce } from 'lodash';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BehaviorSubject, Observable, of, Subject, Subscription } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/authentication/_services/auth.service';
import { ToastService } from 'src/app/core';
import {
  CompanyStorage, CopyFileRequest, CopyToProviderRequest, CopyToXcorpRequest, defaultIcons,
  DownloadProgressInfo, FileItem, FileResponse, FileType, FolderSetting, FolderUpsert, List2Res,
  maximumFileSize, maximumFileSizeText, MoveFileRequest, Pageable, ProviderFile, ShortCutUpsert,
  TreeFolder, UploadProgressInfo, User, userRoles, USER_PROFILE_KEY, PROD_ENV, STAGING_ENV, SystemFolderPath,
} from 'src/app/shared';
import { GeneralConfirmComponent } from '../../_components';
import { DocumentFileBase, DocumentFileDelegate } from '../_models/document-file-base';
import { DocumentRecentFile } from '../_models/document-recent-file';
import { DocumentStorageFile } from '../_models/document-storage-file';
import { DocumentTrashFile } from '../_models/document-trash-file';
import { FileProviderService } from './file-provider.service';
import { FileService } from './file.service';
import { DocumentLayout, DocumentView } from '../_enums/document.enum';
import { COMPANY_DOCUMENT_WIKI, PROJECT_WIKI, WikiGroup, WikiState, getTopicItems, updateWikiItem } from '../../_store/wiki';
import { mappingTreeItemToWiki } from '../../_store/wiki/wiki.utils';
import { UserSettingKey, UserSettingState } from '../../_store/user-setting/user-setting.model';
import { UserSettingAction } from '../../_store/user-setting';
import { environment } from 'src/environments/environment';

export interface TreeItem extends FileItem {
  isOpen: boolean;
  items: FileItem[];
  isDocumentFileBase?: boolean;
}

export type DocumentViewType = 'list' | 'grid';

export class SyncOption {
  force?: boolean;
  keyword?: string;
  pageable?: Pageable;
  callback?: (response: List2Res<FileItem>, curItems: FileItem[]) => void;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentDataService implements DocumentFileDelegate{
  loading$ = new Subject<boolean>();
  projectKey = -1;
  projectTreeItem: TreeItem = {
    id: this.projectKey,
    name: 'Projects',
    editable: true,
    defaultFlg: true,
    type: 'Dir',
    parentUI: null,
    isOpen: false,
    items: null,
    icon: '../../../../assets/icons/documents/folder_projects.svg',
    wikiGroup: WikiGroup.PROJECT
  } as any;

  okrKey = -2;
  okrTreeItem: TreeItem = {
    id: this.okrKey,
    name: 'OKR',
    editable: true,
    defaultFlg: true,
    type: 'Dir',
    parentUI: null,
    isOpen: false,
    items: null,
    icon: '../../../../assets/icons/documents/folder_okr.svg',
  } as any;

  hrKey = -3;
  hrTreeItem: TreeItem = {
    id: this.hrKey,
    name: 'HR',
    editable: true,
    defaultFlg: true,
    type: 'Dir',
    parentUI: null,
    isOpen: false,
    items: null,
    icon: '../../../../assets/icons/documents/folder_hr.svg',
  } as any;

  // companyKey = -4;
  // companyTreeItem: TreeItem = {
  //   id: this.companyKey,
  //   name: 'Company Document',
  //   editable: true,
  //   defaultFlg: true,
  //   type: 'Dir',
  //   parentUI: null,
  //   isOpen: false,
  //   items: null,
  //   icon: '../../../../assets/icons/documents/folder_company.svg',
  // } as any;

  providerKey = 'providers';
  providerTreeItem: TreeItem = {
    id: this.providerKey,
    name: 'File Providers',
    editable: true,
    defaultFlg: true,
    type: 'Dir',
    parentUI: null,
    isOpen: false,
    items: null,
    icon: '../../../../assets/icons/documents/folder_provider.svg',
  } as any;
  // providerIdPrefix = 'provider_';
  // Manage tree data
  private currentView: BehaviorSubject<DocumentViewType> = new BehaviorSubject<DocumentViewType>('list');
  private activeTreeItem: BehaviorSubject<TreeItem> = new BehaviorSubject<TreeItem>(null);
  private errorMessage: BehaviorSubject<string> = new BehaviorSubject<string>('');
  treeMap: { [key: string]: BehaviorSubject<TreeItem> } = {};

  // Manage upload file
  uploadProgressInfos: UploadProgressInfo[] = [];

  // Manage download file
  downloadProgressInfos: DownloadProgressInfo[] = [];

  // User Permission
  isFileManagement = true;

  // Storage
  storage$: BehaviorSubject<CompanyStorage> = new BehaviorSubject(null);
  // Company
  company$: BehaviorSubject<TreeItem[]> = new BehaviorSubject([]);

  pageable: Pageable = {
    page: 0,
    size: 100,
    sort: ['lastView,desc']
  };

  keyword$ = new Subject<string>();
  isVisibleDirectoryPanel$ = new EventEmitter<boolean>();

  storageDocumentFile = new DocumentStorageFile({
    id: 'storage/',
    path: 'storage/',
    name: 'Storage',
    type: FileType.dir,
    icon: '../../../../assets/icons/documents/folder_provider.svg',
    parent: null,
    defaultFlg: true,
  } as any);

  trashDocumentFile = new DocumentTrashFile({
    id: 'trash/',
    path: 'trash/',
    name: 'Recycle Bin',
    type: FileType.dir,
    icon: '../../../../assets/icons/documents/folder_trash.svg',
    parent: null,
    defaultFlg: true,
  } as any);

  recentDocumentFile = new DocumentRecentFile({
    id: 'recent/',
    name: 'Recent',
    path: 'recent/',
    type: FileType.dir,
    icon: '../../../../assets/icons/documents/folder_recent.svg',
    parent: null,
    defaultFlg: true,
  } as any);

  directoryView = DocumentView.DOCUMENT;
  detailView = DocumentView.DOCUMENT;
  DocumentView = DocumentView;
  DocumentLayout = DocumentLayout;

  directoryView$ = new Subject<DocumentView>();
  detailView$ = new Subject<DocumentView>();
  markdownVisibility = true;
  getSubscription: Subscription;

  get currentUser() {
    return this.authService.getLoggedUser();
  }


  constructor(
    private toast: ToastService,
    private modalService: BsModalService,
    private fileService: FileService,
    private fileProviderService: FileProviderService,
    private authService: AuthService,
    private wikiStore: Store<WikiState>,
    private userSettingStore: Store<UserSettingState>,
  ) {
    this.initData();
    // this.syncTreeItemById(this.companyKey); // Get default data for company document.

    /** Hide markdown for production and staging only */
    const envHideMarkdownLists = [PROD_ENV, STAGING_ENV];
    if (envHideMarkdownLists.includes(environment.env)) {
      this.setMarkdownVisibility(false);
    }
  }

  initData() {
    this.initTreeMap();
    this.initCompanyDocument();
    this.updateSystemFolder();
  }

  initTreeMap() {
    this.treeMap[this.projectKey] = new BehaviorSubject<TreeItem>(this.projectTreeItem);
    this.treeMap[this.okrKey] = new BehaviorSubject<TreeItem>(this.okrTreeItem);
    this.treeMap[this.hrKey] = new BehaviorSubject<TreeItem>(this.hrTreeItem);
    // this.treeMap[this.companyKey] = new BehaviorSubject<TreeItem>(this.companyTreeItem);
    this.treeMap[this.providerKey] = new BehaviorSubject<TreeItem>(this.providerTreeItem);

    const documentFileRoot: DocumentFileBase[] = [
      this.storageDocumentFile,
      this.trashDocumentFile,
      this.recentDocumentFile,
    ];

    documentFileRoot.forEach(e => {
      e.delegate = this;
      this.treeMap[e.id] = new BehaviorSubject<TreeItem>(e as any);
    });

    this.treeMap[''] = new BehaviorSubject<TreeItem>({
      id: '',
      parentUI: null,
      items: [
        this.treeMap[this.projectKey].value,
        this.treeMap[this.okrKey].value,
        this.treeMap[this.hrKey].value,
        // this.treeMap[this.companyKey].value,
        this.treeMap[this.providerKey].value,
        this.treeMap[this.storageDocumentFile.id].value,
        this.treeMap[this.trashDocumentFile.id].value,
        this.treeMap[this.recentDocumentFile.id].value,
      ]
    } as any);
  }

  initCompanyDocument() {
    this.fileService.getCompanyDocument({ displayInTreeFolder: true }, {page: 0, size: 100})
      .subscribe((res) => {
        const items = (res.content || []) as TreeItem[];
        items.forEach(item => {
          this.treeMap[item.id] = new BehaviorSubject<TreeItem>({...item, wikiGroup: WikiGroup.COMPANY_DOCUMENT} as any);
        });
        this.company$.next(items);
      });
  }

  updateSystemFolder() {
    this.fileService.getSystemFolders(this.pageable)
      .subscribe(response => {
        const folders = response.content;
        folders.forEach(folder => {
          switch (folder.path) {
            case SystemFolderPath.HR:
              this.hrTreeItem.id = folder.id;
              break;
            case SystemFolderPath.OKR:
              this.okrTreeItem = { ...this.okrTreeItem, ...folder, id: this.okrTreeItem.id };
              this.treeMap[this.okrKey].next(this.okrTreeItem);
              break;
            case SystemFolderPath.COMPANY_DOCUMENT:
              this.wikiStore.dispatch(updateWikiItem({
                id: COMPANY_DOCUMENT_WIKI.id,
                item: {
                  ...mappingTreeItemToWiki(folder),
                  uId: COMPANY_DOCUMENT_WIKI.uId
                }
              }));
              break;
            case SystemFolderPath.PROJECT:
              this.projectTreeItem.id = folder.id;
              Object.assign(this.treeMap, { [folder.id]: this.treeMap[this.projectKey] });
              this.projectKey = folder.id;
              this.wikiStore.dispatch(updateWikiItem({
                id: PROJECT_WIKI.id,
                item: {
                  ...mappingTreeItemToWiki(this.treeMap[folder.id].value),
                  uId: PROJECT_WIKI.uId
                }
              }));
          }
        });
      });
  }

  updateCurrentView(type: DocumentViewType) {
    this.currentView.next(type);
  }

  getCurrentView(): BehaviorSubject<DocumentViewType> {
    return this.currentView;
  }

  getFileIcon(file: FileItem) {
    return file.task?.type?.icon
      || (file.project ? (file.project?.avatar || defaultIcons.project) : null)
      || file.icon
      || (file.type === 'Dir' ? 'assets/icons/documents/folder_default.svg' : 'assets/icons/documents/doc.svg');
  }

  getErrorMessage(): BehaviorSubject<string> {
    return this.errorMessage;
  }

  getActiveTreeItem(): BehaviorSubject<TreeItem> {
    return this.activeTreeItem;
  }

  getActiveTreeItemValue(): TreeItem {
    return this.treeMap[this.activeTreeItem.value?.id]?.value || null;
  }

  changeActiveTreeItem(id: string | number, hidePanel?: boolean) {
    if (this.activeTreeItem.value?.id !== id) {
      this.resetSelecteds(); // Reset current selecteds before update new activeTreeItem;
      this.activeTreeItem.next(this.treeMap[id]?.value);
      this.syncTreeItemById(id, {force: true});
    }

    if (hidePanel) {
      this.isVisibleDirectoryPanel$.next(false);
    }
  }

  syncTreeItemById(id: any, options?: SyncOption, syncWiki: boolean = true) {
    id = isNaN(id) ? id : +id;
    if (this.treeMap[id]?.value?.isDocumentFileBase) {
      ((this.treeMap[id].value as any) as DocumentFileBase).getChilds();
      return;
    }

    if (!this.treeMap[id]?.value?.items || options?.force) {
      let observable$: Observable<List2Res<FileItem>>;
      switch (id) {
        case this.projectKey:
          observable$ = this.getProjectServerTreeData(options);
          break;
        case this.okrKey:
          observable$ = this.getOkrDocumentData();
          break;
        case this.hrKey:
          observable$ = this.getHrDocumentData();
          break;
        // case this.companyKey:
        //   observable$ = this.getCompanyDocumentData();
        //   break;
        case this.providerKey:
          observable$ = this.getListProviders(this.providerKey) as any;
          break;
        default:
          if (this.isProvider(id)) {
            observable$ = this.getDefaultProviderChilds(id) as any;
            break;
          }

          const treeItem = this.getTreeItem(id)?.value;
          if (this.isProviderChildId(treeItem?.id)) {
            observable$ = this.getFileProvider(treeItem?.id, options) as any;
            break;
          }

          observable$ = this.getServerTreeData(id, options);
          break;
      }

      if (!observable$) { return; }
      this.loading$.next(true);

      this.getSubscription?.unsubscribe();
      this.getSubscription = observable$
        .pipe(finalize(() => this.loading$.next(false)))
        .subscribe(
          data => {
            const content = forEach(data.content, (data) => this.setIsOwner(data));
            const hasChildFolder = this.treeMap[id].value?.hasChildFolder || content.some(e => e.type === FileType.dir);
            const resItems = content.map(e => ({ ...e, parentUI: this.treeMap[id].value }));
            const currItems = options?.force ? [] : (this.treeMap[id].value?.items || []);
            const diffItems = resItems.filter(e => currItems.findIndex(i => e.id === i.id) === -1);
            const items = [...currItems, ...diffItems];

            options?.callback?.(data, items);

            // Init data for children
            const itemsTreeValue = content.map(element => {
              element.wikiGroup = this.treeMap[id].value.wikiGroup;

              if (!this.treeMap[element.id]) {
                this.treeMap[element.id] = new BehaviorSubject<TreeItem>(
                  {
                    ...element,
                    isOpen: false,
                    items: null,
                    parentUI: this.treeMap[id].value,
                  }
                );
              } else {
                this.treeMap[element.id].next(
                  {
                    ...this.treeMap[element.id].value,
                    ...element
                  }
                );
              }

              return this.treeMap[element.id]?.value;
            });

            this.treeMap[id].next(
              {
                ...this.treeMap[id].value,
                hasChildFolder,
                items: itemsTreeValue,
              }
            );

            if (id === this.activeTreeItem?.value?.id) {
              this.activeTreeItem.next(this.treeMap[id].value);
            }

            if (this.markdownVisibility && syncWiki) {
              this.wikiStore.dispatch(getTopicItems({
                topic: mappingTreeItemToWiki(this.treeMap[id].value)
              }));
            }
          },
          (error: string) => {
            const httpError = JSON.parse(error);
            this.toast.error(httpError?.message);
          }
        );
    }
  }

  setIsOwner(element: FileItem) {
    if (this.currentUser.id === element.owner?.id) {
      element.isOwner = true;

      return;
    }

    element.isOwner = false;
  }

  getTreeItemExpandedId(id: number) {
    const items = this.getTreeItem(id).value?.items;

    return reduce(items, (pre, cur) => {
      if (isEmpty(pre)){
        pre.push(id);
      }

      const _items = this.getTreeItem(cur.id).value?.items;

      if (cur.type === FileType.dir && !isEmpty(_items)) {
        pre = [...pre, ...this.getTreeItemExpandedId(cur.id)];
      }

      return pre;
    }, []);
  }

  getTreeItem(id: number): BehaviorSubject<TreeItem> {
    return this.treeMap[id];
  }

  getServerTreeData(id: number, options?: SyncOption) {
    Object.assign(this.pageable, options?.pageable);

    return this.fileService.getChildFiles(+id,
      { displayInTreeFolder: true, keyword: options?.keyword },
      this.pageable
    );
  }

  getProjectServerTreeData(options?: SyncOption) {
    // Object.assign(this.pageable, options?.pageable);
    const pageable = {...this.pageable, ...options?.pageable};
    return this.fileService.getProjects(
      { displayInTreeFolder: true, keyword: options?.keyword },
      pageable
    );
  }

  getCompanyDocumentData() {
    return this.fileService.getCompanyDocument({ displayInTreeFolder: true }, this.pageable);
  }

  isProvider(pathId: string) {
    return this.isProviderChildId(pathId) && pathId.split('/').length === 2;
  }

  getProviderId(pathId: string) {
    return pathId.split('/')[1] || '';
  }

  isProviderChildId(pathId: string) {
    return pathId?.startsWith?.(this.providerKey);
  }

  getProviderChildId(pathId: string) {
    if (!this.isProviderChildId(pathId)) {
      return pathId;
    }
    return pathId.split('/').pop();
  }

  getListProviders(pathId: string) {
    return this.fileProviderService.getProviders({page: 0, size: 100})
      .pipe(map(e => {
        e.content = e.content.map(i => {
          return {
            ...i,
            fileId: i.id,
            providerId: this.getProviderId(pathId),
            id: `${pathId}/${i.id}`,
            path: `${pathId}/${i.id}`,
            isProvider: true,
            providerType: i.type,
            type: 'Dir',
            icon: 'assets/icons/documents/folder_drive.svg',
            defaultFlg: true,
          };
        }) as any;

        return e;
      }));
  }

  getDefaultProviderChilds(pathId: any) { // My Drive, SharedWithMe
    const content: FileItem[] = [
      {
        id: `${pathId}/root`,
        fileId: 'root',
        providerId: this.getProviderId(pathId),
        path: `${pathId}/root`,
        type: FileType.dir,
        name: 'My Drive',
        icon: 'assets/icons/documents/folder_mydrive.svg',
        defaultFlg: true,
      },
      {
        id: `${pathId}/sharedWithMe`,
        fileId: 'sharedWithMe',
        providerId: this.getProviderId(pathId),
        path: `${pathId}/sharedWithMe`,
        type: FileType.dir,
        name: 'Shared With Me',
        icon: 'assets/icons/documents/folder_sharedWithMe.svg',
        defaultFlg: true,
      },
    ] as any;
    return of({ content });
  }

  mapProviderFile(pathId: string, e: ProviderFile) {
    return {
      ...e,
      id: `${pathId}/${e.id}`,
      fileId: e.id,
      providerId: this.getProviderId(pathId),
      path: `${pathId}/${e.id}`,
      editable: true
    };
  }

  getFileProvider(pathId: string, options?: SyncOption) {
    const providerId = this.getProviderId(pathId) as any;
    const parentId = this.getProviderChildId(pathId);
    return this.fileProviderService.getFilesFromProvider(providerId, { page: 0, size: 100 }, { parentId, keyword: options?.keyword || '' })
      .pipe(map(e => {
        return {
          ...e,
          content: e.content.map(c => (this.mapProviderFile(pathId, c))),
        };
      }));
  }

  getOkrDocumentData() {
    return this.fileService.getOkrDocument({ displayInTreeFolder: true }, this.pageable);
  }

  getHrDocumentData() {
    return this.fileService.getHrDocument({ displayInTreeFolder: true}, this.pageable);
  }

  createFolder(parentId: number, payload: FolderUpsert, successFn?: (file?: FileResponse) => void, errorFn?: (message: string) => void) {
    let observable$;
    const treeItem = this.getTreeItem(parentId)?.value;
    const isProviderFile = treeItem?.providerId && treeItem?.fileId;

    if (isProviderFile) {
      observable$ = this.fileProviderService.createFolder(treeItem.providerId, treeItem.fileId, payload);
    } else {
      // observable$ = parentId === this.companyKey
      //   ? this.fileService.createCompanyFolder(payload) :
      observable$ = this.fileService.createFolder(parentId, payload);
    }

    observable$.subscribe(
      (file) => {
        file.wikiGroup = this.treeMap[parentId].value.wikiGroup;
        this.pushFileItemToTree(parentId, file);
        // this.syncTreeItemById(parentId, {force: true});
        successFn?.(file);
      },
      (error: string) => {
        errorFn?.(error);
      }
    );
  }

  createDriveFolder(pathId: any, payload: FolderUpsert,
                    successFn?: (file?: FileResponse) => void, errorFn?: (message: string) => void) {
    const providerId = this.getProviderId(pathId);
    const parentId = this.getProviderChildId(pathId);
    this.fileProviderService.createFolder(providerId as any, parentId, payload).subscribe(
      (file) => {
        this.pushFileItemToTree(pathId, file as any);
        successFn?.(file as any);
      },
      (error: string) => {
        errorFn?.(error);
      }
    );
  }

  createShortcut(parentId: number, payload: ShortCutUpsert, successFn?: () => void, errorFn?: (message: string) => void) {
    this.fileService.createShortcut(parentId, payload).subscribe(
      (file) => {
        successFn?.();
        this.pushFileItemToTree(parentId, file);
      },
      (err: string) => {
        errorFn?.(err);
      }
    );
  }

  settingFolder(folder: FileItem, bodyRequest: FolderSetting, successFn?: () => void, errorFn?: (message: string) => void) {
    this.fileService.settingFolder(folder.id, bodyRequest).subscribe(
      (res: FileResponse) => {
        successFn?.();
        folder.icon = res.icon;
      },
      error => {
        errorFn?.(error);
      }
    );
  }

  pushFileItemToTree(parentId: number, file: FileResponse) {
    const parentValue = this.treeMap[parentId]?.value;
    if (parentValue?.providerId && parentValue?.fileId) {
      file = this.mapProviderFile(parentId as any, file as any) as any;
    }
    const items = parentValue?.items;

    if (items) {
      const files = items.filter(e => e.type === 'File');
      const folders = items.filter(e => e.type === 'Dir');
      if (file.type === 'File') {
        files.push({ ...file, parentUI: parentValue });
      }

      if (file.type === 'Dir') {
        folders.push({ ...file, parentUI: parentValue });
      }

      this.treeMap[parentId].next(
        {
          ...parentValue,
          items: [...folders, ...files],
          hasChildFolder: parentValue?.hasChildFolder || folders.length > 0,
        }
      );

      this.treeMap[file.id] = new BehaviorSubject<TreeItem>(
        {
          ...file,
          isOpen: false,
          items: null,
          parentUI: parentValue,
        }
      );
    }
  }

  pushFileItemByCodeToTree(file: FileItem) {
    // TODO Huy
    if (!file) {
      return null;
    }
    let fileParent = file.parent || null;

    const isProjectFile = fileParent && !fileParent.parent && fileParent.name === 'projects' && fileParent.defaultFlg;
    if (isProjectFile) {
      fileParent = this.projectTreeItem;
    }
    // else {
    //   if (!fileParent) {
    //     fileParent = this.companyTreeItem;
    //   }
    // }

    if (!this.treeMap[file.id]) {
      this.treeMap[file.id] = new BehaviorSubject<TreeItem>(
        {
          ...file,
          isOpen: false,
          items: null,
          parentUI: this.pushFileItemByCodeToTree(fileParent)?.value,
        }
      );
    }
    return this.treeMap[file.id];
  }

  // Manage selected items
  get activeTreeItemSelecteds(): FileItem[] {
    return this.getActiveTreeItemValue()?.items?.filter(e => e.isSelected) || [];
  }

  resetSelecteds() {
    this.setIsSelected(false);
  }

  setIsSelected(isSelected: boolean) {
    this.getActiveTreeItemValue()?.items?.forEach(file => {
      file.isSelected = isSelected;
    });
  }

  removeSelectedsFromTree(selecteds: FileItem[] = []) {
    selecteds.forEach(selected => {
      if (this.treeMap[selected.parentUI?.id]?.value) {
        this.treeMap[selected.parentUI?.id].value.items = this.treeMap[selected.parentUI?.id].value.items.filter(e => e.id !== selected.id);
        this.treeMap[selected.parentUI?.id].next(this.treeMap[selected.parentUI?.id].value);
      }

      if (selected.id === this.getActiveTreeItemValue()?.id) {
        this.changeActiveTreeItem(this.projectKey);
      }
    });
  }

  onDelete(selecteds: FileItem[]) {
    const initialState = {
      title: 'Delete',
      message: 'Do you want to delete selected items?',
    };
    const confirmModalRef = this.modalService.show(GeneralConfirmComponent, { backdrop: 'static', initialState });

    confirmModalRef.content.result$.subscribe((result) => {
      if (result) {
        this.deleteSelected(
          selecteds,
          () => {
            this.toast.success('Deleted Successfully!');
          },
          (error: string) => {
            const httpError = JSON.parse(error);
            this.toast.error(httpError?.message);
          }
        );
      }
    });
  }

  deleteSelected(selecteds: FileItem[], successFn?: () => void, errorFn?: (message: string) => void) {
    if (this.isEmptySelected(selecteds)) {
      return;
    }

    let delete$: Observable<any>;

    if (this.isProviderChildId(selecteds[0].id)) {
      const providerId = this.getProviderId(selecteds[0].id);
      const ids = selecteds.map(e => this.getProviderChildId(e.id));
      delete$ = this.fileProviderService.delete(providerId as any, ids);
    } else {
      const ids = selecteds.map(e => e.id);
      delete$ = this.fileService.delete(ids);
    }

    delete$.subscribe(
      (file) => {
        this.removeSelectedsFromTree(selecteds);
        successFn?.();
      },
      (error: string) => {
        errorFn?.(error);
      });
  }

  countTreeFolderTotal(treeFolder: TreeFolder, ref: {count: number}) {
    if (treeFolder.name) {
      ref.count += 1;
    }

    ref.count += treeFolder.files.length;
    treeFolder.directories.forEach(e => {
      this.countTreeFolderTotal(e, ref);
    });
  }

  onFolderDropped(destinationFile: FileItem, treeFolder: TreeFolder) {
    const countRef = {count: 0};
    this.countTreeFolderTotal(treeFolder, countRef);

    if (this.isProviderChildId(destinationFile.id)) {
      this.uploadFolderToDrive(destinationFile.id, treeFolder);
      return;
    }

    if (!this.isDisabledUpload(destinationFile)) {
      this.uploadFolderToXcorp(destinationFile.id, treeFolder);
    }
  }

  uploadFolderToXcorp(parentId: any, treeFolder: TreeFolder) {
    const callback = (id: any, isRootFolder: boolean = false) => {
      treeFolder.directories.forEach(folder => {
        this.uploadFolderToXcorp(id, folder);
      });
      this.onUploadFile(id, treeFolder.files, isRootFolder);
    };

    if (treeFolder.name) {
      this.createFolder(parentId, {name: treeFolder.name}, (fileRes) => {
        callback(fileRes.id, true);
      });
    } else {
      callback(parentId);
    }
  }

  uploadFolderToDrive(pathId: string, treeFolder: TreeFolder) {
    const callback = (pathIdChild: string, isRootFolder: boolean = false) => {
      treeFolder.directories.forEach(folder => {
        this.uploadFolderToDrive(pathIdChild, folder);
      });
      this.onUploadFileToDrive(pathIdChild, treeFolder.files, isRootFolder);
    };

    if (treeFolder.name) {
      this.createDriveFolder(pathId, {name: treeFolder.name}, (fileRes) => {
        const file = this.mapProviderFile(pathId, fileRes as any);
        callback(file.id, true);
      });
    } else {
      callback(pathId);
    }
  }

  // Manage upload file
  onUploadFile(parentId: number, files: File[], refreshParent: boolean = true) {
    if (!this.uploadProgressInfos.some(e => e.status === 'inprogress')) {
      this.uploadProgressInfos.splice(0, this.uploadProgressInfos.length); // Reset if all completed
    }
    files.forEach(file => {
      const uploadInfo: UploadProgressInfo = {
        parentId,
        percent: 0,
        fileName: file.name,
        status: 'inprogress',
        errorMsg: null,
        subscription: null,
      };

      if (file.size > maximumFileSize) {
        uploadInfo.status = 'error';
        uploadInfo.errorMsg = `File larger than ${maximumFileSizeText} are not currently supported!`;
      } else {
        uploadInfo.subscription = this.fileService.uploadFile(parentId, [file]).subscribe(
          event => {
            if (event.type === HttpEventType.UploadProgress) {
              const uploadProgress = Math.round(100 * event.loaded / event.total) - 1;
              uploadInfo.percent = uploadProgress > 0 ? uploadProgress : 0;
            } else if (event instanceof HttpResponse && event.body) {
              uploadInfo.percent = 100;
              uploadInfo.status = 'success';
              const fileRes = event.body[0];

              // if (refreshParent) {
              this.pushFileItemToTree(parentId, fileRes);
              // }
            }
          },
          (error: string) => {
            const httpError = JSON.parse(error);
            const msg = httpError?.message || 'An error occurred while uploading the file to the server.';
            uploadInfo.percent = 0;
            uploadInfo.status = 'error';
            uploadInfo.errorMsg = msg;
          });
      }

      this.uploadProgressInfos.push(uploadInfo);
    });
  }

  onUploadFileToDrive(pathId: string, files: File[], refreshParent: boolean = true) {
    if (!this.uploadProgressInfos.some(e => e.status === 'inprogress')) {
      this.uploadProgressInfos.splice(0, this.uploadProgressInfos.length); // Reset if all completed
    }
    const providerId = this.getProviderId(pathId) as any;
    const parentId = this.getProviderChildId(pathId);

    files.forEach(file => {
      const uploadInfo: UploadProgressInfo = {
        parentId,
        percent: 0,
        fileName: file.name,
        status: 'inprogress',
        errorMsg: null,
        subscription: null,
      };

      if (file.size > maximumFileSize) {
        uploadInfo.status = 'error';
        uploadInfo.errorMsg = `File larger than ${maximumFileSizeText} are not currently supported!`;
      } else {
        uploadInfo.subscription = this.fileProviderService.uploadFile(providerId, parentId, [file]).subscribe(
          event => {
            if (event.type === HttpEventType.UploadProgress) {
              const uploadProgress = Math.round(100 * event.loaded / event.total) - 1;
              uploadInfo.percent = uploadProgress > 0 ? uploadProgress : 0;
            } else if (event instanceof HttpResponse && event.body) {
              uploadInfo.percent = 100;
              uploadInfo.status = 'success';
              const fileRes = event?.body?.[0];
              if (fileRes) {
                this.pushFileItemToTree(pathId as any, this.mapProviderFile(pathId, fileRes) as any);
              }
            }
          },
          (error: string) => {
            const httpError = JSON.parse(error);
            const msg = httpError?.message || 'An error occurred while uploading the file to the server.';
            uploadInfo.percent = 0;
            uploadInfo.status = 'error';
            uploadInfo.errorMsg = msg;
          });
      }

      this.uploadProgressInfos.push(uploadInfo);
    });
  }

  addFolderThenUploadFile() {}

  // Manage Move File

  onMoveFile(desFileId: number, selecteds: FileItem[], successFn?: () => void, errorFn?: (message: string) => void) {
    if (selecteds.length <= 0 || !desFileId) {
      return;
    }

    const payload: MoveFileRequest = {
      desFileId,
      sourceFileId: selecteds.map(e => e.id),
    };

    this.fileService.moveFile(payload).subscribe(
      (files) => {
        successFn?.();
        files.forEach(file => {
          this.pushFileItemToTree(desFileId, file);
        });

        this.removeSelectedsFromTree(selecteds);

      },
      (error: string) => {
        errorFn?.(error);
      });
  }

  cutFromProviderToXcorp(desFileId: number, selecteds: FileItem[], successFn?: () => void, errorFn?: (message: string) => void) {
    this.copyFromProviderToXcorp(desFileId, selecteds,
      () => {
        this.deleteSelected(selecteds, successFn, errorFn);
      },
      (error) => {
        errorFn?.(error);
      });
  }

  cutFromXcorpToProvider(
    fileProviderId: number, desFileId: number, selecteds: FileItem[], successFn?: () => void, errorFn?: (message: string) => void) {
    this.copyFromXcorpToProvider(fileProviderId, desFileId, selecteds,
      () => {
        this.deleteSelected(selecteds, successFn, errorFn);
      },
      (error) => {
        errorFn?.(error);
      });
  }

  cutFromXcorpToXcorp(desFileId: number, selecteds: FileItem[], successFn?: () => void, errorFn?: (message: string) => void) {
    this.moveFromXcorpToXcorp(desFileId, selecteds,
      () => {
        successFn?.();
      },
      (error) => {
        errorFn?.(error);
      });
  }

  copyFromProviderToXcorp(desFileId: number, selecteds: FileItem[], successFn?: () => void, errorFn?: (message: string) => void) {
    const desFileItem = this.getTreeItem(desFileId).value;
    if (this.isProviderChildId(desFileItem.id)) {
      return;
    }
    const payloads: CopyToXcorpRequest[] = selecteds.map(e => {
      const payload: CopyToXcorpRequest = {
        fileProviderId: +this.getProviderId(e.id),
        sourceFileId: this.getProviderChildId(e.id),
        destinationFileId: desFileItem.id,
      };
      return payload;
    });

    let count = 0;

    payloads.forEach(payload => {
      this.fileProviderService.copyToXcorp(payload)
        .subscribe(
          (res) => {
            count += 1;
            if (count === payloads.length) {
              successFn?.();
              this.syncTreeItemById(desFileId, {force: true});
            }
          },
          (error: string) => {
            count += 1;
            if (count === payloads.length) {
              errorFn?.(error);
              this.syncTreeItemById(desFileId, {force: true});
            }
          }
        );
    });
  }

  copyFromXcorpToProvider(
    fileProviderId: number, desFileId: any, selecteds: FileItem[], successFn?: () => void, errorFn?: (message: string) => void) {
    const payloads: CopyToProviderRequest[] = selecteds.map(e => {
      const payload: CopyToProviderRequest = {
        fileProviderId,
        sourceFileId: e.id,
        destinationFileId: this.getProviderChildId(desFileId),
      };
      return payload;
    });

    let count = 0;

    payloads.forEach(payload => {
      this.fileProviderService.copyToProvider(payload)
        .subscribe(
          (res) => {
            count += 1;
            if (count === payloads.length) {
              successFn?.();
              this.syncTreeItemById(desFileId, {force: true});
            }
          },
          (error: string) => {
            count += 1;
            if (count === payloads.length) {
              errorFn?.(error);
              this.syncTreeItemById(desFileId, {force: true});
            }
          }
        );
    });
  }

  copyFromXcorpToXcorp(desFileId: any, selecteds: FileItem[], successFn?: () => void, errorFn?: (message: string) => void) {
    const payload: CopyFileRequest = {
      sourceFileId: selecteds.map(e => e.id),
      desFileId,
    };

    this.fileProviderService.copyFile(payload)
      .subscribe(
        (res) => {
          successFn?.();
          this.syncTreeItemById(desFileId, { force: true });
        },
        (error: string) => {
          errorFn?.(error);
        }
      );
  }

  moveFromXcorpToXcorp(desFileId: any, selecteds: FileItem[], successFn?: () => void, errorFn?: (message: string) => void) {
    const payload: CopyFileRequest = {
      sourceFileId: selecteds.map(e => e.id),
      desFileId,
    };

    this.fileProviderService.moveFile(payload)
      .subscribe(
        (res) => {
          successFn?.();
          this.syncTreeItemById(this.activeTreeItem.value.id, { force: true });
        },
        (error: string) => {
          errorFn?.(error);
        }
      );
  }

  onCancelUploadingFile(info: UploadProgressInfo) {
    info?.subscription?.unsubscribe();
    info.status = 'cancel';
  }

  onCancelAndRemoveAllUploadingFiles() {
    this.uploadProgressInfos.forEach(e => {
      e?.subscription?.unsubscribe();
    });

    this.uploadProgressInfos.splice(0, this.uploadProgressInfos.length);
  }

  onCancelDownloadingFile(info: DownloadProgressInfo) {
    info?.subscription?.unsubscribe();
    info.status = 'cancel';
  }

  onCancelAndRemoveAllDownloadingFiles() {
    this.downloadProgressInfos.forEach(e => {
      e?.subscription?.unsubscribe();
    });

    this.downloadProgressInfos.splice(0, this.downloadProgressInfos.length);
  }


  // Delete Provider

  deleteProvider(pathId: string) {
    const treeItem = this.getTreeItem(pathId as any)?.value;
    if (!treeItem) {
      return;
    }

    const providerId = this.getProviderId(pathId);
    return this.fileProviderService.deleteProvider(providerId)
      .subscribe((res) => {
        this.removeSelectedsFromTree([treeItem]);
      });
  }

  getRootParentUI(item: TreeItem): TreeItem {
    if (item?.parentUI?.parentUI) {
      return this.getRootParentUI(item.parentUI);
    }

    return item?.parentUI;
  }

  isBelongToProjects(item: TreeItem) {
    return this.getRootParentUI(item)?.id === this.projectKey;
  }

  isDefaultProviderChild(file: FileItem) {
    return file.defaultFlg && this.isProviderChildId(file.id) && ['/root', '/sharedWithMe'].some(path => file.path?.endsWith(path));
  }

  isTaskFolder(item: TreeItem) {
    return this.isBelongToProjects(item) && item.defaultFlg && item.name === 'tasks';
  }

  isProjectsFolder(item: TreeItem) {
    return item?.id === this.projectKey;
  }

  isProviderFolder(item: TreeItem) {
    return item?.id === this.providerKey;
  }

  isSytemGeneralFolder(file: FileItem) {
    return file.path === 'general/';
  }

  canEdit(file: FileItem) {
    return file?.editable && !file?.defaultFlg;
  }

  isDisabledRename(file: FileItem) {
    return !this.canEdit(file);
  }

  isDisabledAdd(file: FileItem) {
    if (file.project || this.isSytemGeneralFolder(file) || this.isDefaultProviderChild(file)) {
      return false;
    }

    if (file.type === FileType.file) {
      return true;
    }

    return !this.canEdit(file);
  }

  isDisabledFolderSetting(file: FileItem) {
    return !this.canEdit(file) || file.type !== FileType.dir || this.isProviderChildId(file.id);
  }

  isDisabledShortcut(file: FileItem) {
    return !this.isSuperAdmin() || file.type !== FileType.dir || !this.canEdit(file) || this.isProviderChildId(file.id);
  }

  isDisabledUpload(file: FileItem, selecteds: FileItem[] = []) {
    if (this.isSytemGeneralFolder(file) && !selecteds?.every(e => e.type === FileType.dir)) {
      return true;
    }
    return this.isDisabledAdd(file);
  }

  // Manage available feature
  isEmptySelected(selecteds: FileItem[] = []) {
    return selecteds.length < 1;
  }

  isDisabledDelete(selecteds: FileItem[] = []) {
    return this.isEmptySelected(selecteds) || selecteds.some(e => !this.canEdit(e));
  }

  isDisabledDownload(selecteds: FileItem[] = []) {
    return this.isEmptySelected(selecteds) || selecteds.some(e => !e.parentUI);
  }

  isDisabledLink(selecteds: FileItem[] = []) {
    return this.isEmptySelected(selecteds) || selecteds.some(e => !e.parentUI || this.isProviderChildId(e.id));
  }

  isDisabledShare(selecteds: FileItem[] = []) {
    return this.isEmptySelected(selecteds) || selecteds.some(e => !e.parentUI || this.isProviderChildId(e.id));
  }

  isDisabledManageVersion() {
    return true;
  }

  isDisabledOpenNewTab(file: FileItem) {
   return file.type !== FileType.file || this.isProviderChildId(file.id) || file.shortcut;
  }

  isSuperAdmin() {
    const userProfile: User = JSON.parse(localStorage.getItem(USER_PROFILE_KEY)) || null;
    if (userProfile?.userRoles) {
      return userProfile.userRoles?.some((e) => e.roleCode === userRoles.superAdmin);
    }
    return false;
  }


  loadChildsDone(parent: DocumentFileBase<any>, items: DocumentFileBase<any>[]) {
    if (parent && !this.treeMap[parent.id]) {
      parent.delegate = this;
      this.treeMap[parent.id] = new BehaviorSubject<TreeItem>(parent as any);
    }

    this.treeMap[parent.id].value.items = items.map(item => {
      item.delegate = this;
      this.treeMap[item.id] = new BehaviorSubject<TreeItem>(item as any);
      return this.treeMap[item.id].value;
    });

    this.treeMap[parent.id].next(this.treeMap[parent.id].value);
  }

  onSwitchView(view: DocumentView = null, element: DocumentLayout = null, updateUserSetting = false) {
    this[element] = view;
    this[`${element}$`].next(view);

    if (element === DocumentLayout.DIRECTORY) {
      this.detailView = view;
      this.detailView$.next(view);
    }

    if (updateUserSetting) {
      this.updateUserSettingMode();
    }
  }

  updateUserSettingMode() {
    this.userSettingStore.dispatch(UserSettingAction.updateUserSetting({
      payload: {
        key: UserSettingKey.documentMode,
        value: JSON.stringify({ detailView: this.detailView, directoryView: this.directoryView }),
      }
    }));
  }

  setMarkdownVisibility(value: boolean) {
    this.markdownVisibility = value;
  }
}
