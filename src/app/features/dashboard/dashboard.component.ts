import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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

import { RouterLink, RouterOutlet } from "@angular/router";
import { MatLine } from "@angular/material/core";

import { ThemeService } from "../../@core/application/services/theme.service";

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
export class DashboardComponent implements OnInit {

  links = [
    { name: 'Início', icon: 'home', path: '/dashboard' },
    { name: 'Caixa de Entrada', icon: 'info', path: '/dashboard/inbox' },
    { name: 'Minhas Tarefas', icon: 'contact_mail', path: '/dashboard/tasks' },
  ];

  isDarkTheme?: boolean;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.isDarkTheme.subscribe(theme => this.isDarkTheme = theme);
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.setDarkTheme(this.isDarkTheme);
  }
}
