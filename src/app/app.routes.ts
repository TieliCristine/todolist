import { Routes } from '@angular/router';

import { LoginComponent } from "./features/login/login.component";
import { DashboardComponent } from "./features/dashboard/dashboard.component";
import { InboxComponent } from "./features/inbox/inbox.component";
import { TasksComponent } from "./features/tasks/tasks.component";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
      { path: 'inbox', component: InboxComponent },
      { path: 'tasks', component: TasksComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
];
