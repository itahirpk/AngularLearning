import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentFormComponent } from './department-form/department-form.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { routing } from './app.routing';
import { DepartmentMainComponent } from './department-main/department-main.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    DepartmentFormComponent,
    DepartmentListComponent,
    DepartmentMainComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
