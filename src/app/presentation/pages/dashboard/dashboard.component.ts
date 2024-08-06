import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatSidenavModule } from "@angular/material/sidenav";
import { FormsModule } from "@angular/forms";
import {
  DragDropModule,
} from "@angular/cdk/drag-drop";
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from "@angular/cdk/menu";
import { MatListModule } from "@angular/material/list";

import { ModalService } from "../../../@core/services/modal.service";
import { RouterLink, RouterOutlet } from "@angular/router";
import { MatLine } from "@angular/material/core";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    FormsModule,
    DragDropModule,
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItem,
    MatListModule,
    CommonModule,
    NgForOf,
    RouterLink,
    MatLine,
    RouterOutlet
  ]
})
export class DashboardComponent {

  links = [
    { name: 'Início', icon: 'home', path: '/dashboard' },
    { name: 'Caixa de Entrada', icon: 'info', path: '/dashboard/inbox' },
    { name: 'Minhas Tarefas', icon: 'contact_mail', path: '/dashboard/tasks' },
  ];

  constructor(
    private modalService: ModalService
  ) {
  }

  showInfo(link: string) {
    console.log(link);
  }

  openModal(link: any): void {
    this.modalService.openModal(link.name, link.content);
  }
}
