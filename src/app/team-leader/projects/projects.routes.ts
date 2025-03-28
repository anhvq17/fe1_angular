import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

export const PROJECTS_ROUTES: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'add-project', loadChildren: () => import('../add-project/add-project.routes').then(m => m.ADDPROJECT_ROUTES) },
  { path: 'edit-project/:id', loadChildren: () => import('../edit-project/edit-project.routes').then(m => m.EDITPROJECT_ROUTES) },
];
