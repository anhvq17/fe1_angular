import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', loadChildren: () => import('./team-leader/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES) },
  { path: 'projects', loadChildren: () => import('./team-leader/projects/projects.routes').then(m => m.PROJECTS_ROUTES) },
  { path: 'add-task', loadChildren: () => import('./employee/add-task/add-task.routes').then(m => m.ADDTASK_ROUTES) },
];
