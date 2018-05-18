import { Routes, RouterModule } from '@angular/router';

import { DepartmentFormComponent } from './department-form/department-form.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentMainComponent } from './department-main/department-main.component';

const appRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'main' },
    {path: 'update',component: DepartmentFormComponent},
    {path: 'list',component: DepartmentListComponent},
    {path: 'main', component: DepartmentMainComponent}   

];

export const routing = RouterModule.forRoot(appRoutes);