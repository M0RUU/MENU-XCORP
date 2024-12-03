import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { FileItem } from 'src/app/shared';
import { DocumentDataService } from './document-data.service';

export interface DocumentClipboard {
  action: DocumentClipboardAction;
  items: FileItem[];
}

export enum DocumentClipboardAction {
  cut = 'cut',
  copy = 'copied',
}

export interface ClipboardTransferData {
  time: string;
  destinationFile: FileItem;
  items: FileItem[];
}
@Injectable({
  providedIn: 'root'
})
export class DocumentClipboardService {
  clipboard: DocumentClipboard;
  copingClipboards: ClipboardTransferData[] = [];
  movingClipboards: ClipboardTransferData[] = [];

  constructor(
    private documentDataService: DocumentDataService,
  ) {

  }

  reset() {
    this.clipboard = null;
  }

  canCopy(selecteds: FileItem[]) {
    return selecteds.length > 0 && selecteds.every(e => {
      return !e.defaultFlg;
    });
  }

  copy(selecteds: FileItem[]) {
    this.clipboard = {
      action: DocumentClipboardAction.copy,
      items: selecteds,
    };
  }

  canCut(selecteds: FileItem[]) {
    return selecteds.length > 0 && selecteds.every(e => {
      return this.documentDataService.canEdit(e);
    });
  }

  cut(selecteds: FileItem[]) {
    this.clipboard = {
      action: DocumentClipboardAction.cut,
      items: selecteds,
    };
  }

  canPaste(destinationFile: FileItem) {
    return this.clipboard?.items?.length > 0 && !this.documentDataService.isDisabledUpload(destinationFile, this.clipboard.items);
  }

  isCuttedItem(item: FileItem) {
    return this.clipboard?.action === DocumentClipboardAction.cut && this.clipboard?.items.find(e => e.id === item.id);
  }

  paste(destinationFile: FileItem) {
    if (!this.canPaste(destinationFile)) {
      return;
    }
    const time = moment().format();
    const destinationFileId = destinationFile.id;
    const selecteds: FileItem[] = [...(this.clipboard?.items || [])];
    const clipboardData: ClipboardTransferData = {
      time,
      destinationFile,
      items: selecteds,
    };

    const handleCopy = () => {
      this.copingClipboards.push(clipboardData);
      this.reset();
    };

    const handleCopyDone = () => {
      const index = this.copingClipboards.findIndex(e => e === clipboardData);
      if (index !== -1) {
        this.copingClipboards.splice(index, 1);
      }
    };

    const handleMove = () => {
      this.movingClipboards.push(clipboardData);
      this.reset();
    };

    const handleMoveDone = () => {
      const index = this.movingClipboards.findIndex(e => e === clipboardData);
      if (index !== -1) {
        this.movingClipboards.splice(index, 1);
      }
    };

    // from xcorp to provider
    if (this.documentDataService.isProviderChildId(destinationFile.id)
      && this.clipboard?.items.every(e => !this.documentDataService.isProviderChildId(e.id))) {
      const providerId = this.documentDataService.getProviderId(destinationFile.id);
      if (this.clipboard?.action === DocumentClipboardAction.cut) {
        handleMove();
        this.documentDataService.cutFromXcorpToProvider(+providerId, destinationFileId, selecteds,
          () => {
            handleMoveDone();
          },
          () => {
            handleMoveDone();
          });
        return;
      }

      if (this.clipboard?.action === DocumentClipboardAction.copy) {
        handleCopy();
        this.documentDataService.copyFromXcorpToProvider(+providerId, destinationFileId, selecteds,
          () => {
            handleCopyDone();
          },
          () => {
            handleCopyDone();
          }
        );
        return;
      }
      return;
    }

    // from provider to xcorp
    if (!this.documentDataService.isProviderChildId(destinationFile.id)
      && this.clipboard?.items.every(e => this.documentDataService.isProviderChildId(e.id))) {
      if (this.clipboard?.action === DocumentClipboardAction.cut) {
        handleMove();
        this.documentDataService.cutFromProviderToXcorp(destinationFileId, selecteds,
          () => {
            handleMoveDone();
          },
          () => {
            handleMoveDone();
          });
        return;
      }

      if (this.clipboard?.action === DocumentClipboardAction.copy) {
        handleCopy();
        this.documentDataService.copyFromProviderToXcorp(destinationFileId, selecteds,
          () => {
            handleCopyDone();
          },
          () => {
            handleCopyDone();
          });
        return;
      }
      return;
    }


    // from xcorp to xcorp
    if (!this.documentDataService.isProviderChildId(destinationFile.id)
      && this.clipboard?.items.every(e => !this.documentDataService.isProviderChildId(destinationFile.id))) {
      if (this.clipboard?.action === DocumentClipboardAction.cut) {
        handleMove();
        this.documentDataService.cutFromXcorpToXcorp(destinationFileId, selecteds,
          () => {
            handleMoveDone();
          },
          () => {
            handleMoveDone();
          }
        );
        return;
      }

      if (this.clipboard?.action === DocumentClipboardAction.copy) {
        handleCopy();
        this.documentDataService.copyFromXcorpToXcorp(destinationFileId, selecteds,
          () => {
            handleCopyDone();
          },
          () => {
            handleCopyDone();
          });
        return;
      }
      return;
    }
  }
}
