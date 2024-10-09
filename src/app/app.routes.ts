import { Routes } from '@angular/router';

import { LoginComponent } from "./@core/application/pages/login/login.component";
import { DashboardComponent } from "./@core/application/pages/dashboard/dashboard.component";
import { InboxComponent } from "./@core/application/pages/inbox/inbox.component";
import { TasksComponent } from "./@core/application/pages/tasks/tasks.component";
import { StartComponent } from './@core/application/pages/start/start.component';
import { AuthGuard } from './@core/infra/security/guards/auth.guard';

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
