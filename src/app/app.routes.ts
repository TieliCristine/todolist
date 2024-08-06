import { Routes } from '@angular/router';

import { LoginComponent } from "./presentation/pages/login/login.component";
import { DashboardComponent } from "./presentation/pages/dashboard/dashboard.component";
import { AuthGuard } from "./@core/guards/auth.guard";
import { InboxComponent } from "./presentation/pages/inbox/inbox.component";
import { TasksComponent } from "./presentation/pages/tasks/tasks.component";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
      { path: 'inbox', component: InboxComponent },
      { path: 'tasks', component: TasksComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
];
