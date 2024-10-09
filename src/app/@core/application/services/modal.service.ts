import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from "../components/modal/modal.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private dialog: MatDialog) {}

  openModal(title: string, content: string): void {
    this.dialog.open(ModalComponent, {
      data: { title, content }
    });
  }
}
