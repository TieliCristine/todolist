import { Routes } from '@angular/router';

import { LoginComponent } from "./features/login/login.component";
import { DashboardComponent } from "./features/dashboard/dashboard.component";
import { InboxComponent } from "./features/inbox/inbox.component";
import { TasksComponent } from "./features/tasks/tasks.component";
import { StartComponent } from './features/start/start.component';
import { AuthGuard } from './@core/application/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'start', pathMatch: 'full' },
      { path: 'start', component: StartComponent },
      { path: 'inbox', component: InboxComponent },
      { path: 'tasks', component: TasksComponent }
    ]
  },
  { path: '**', redirectTo: 'login' },
];
