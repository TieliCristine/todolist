import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from "../components/create-message/create-message.component";

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
