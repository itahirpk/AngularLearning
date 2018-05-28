import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule,MatSnackBarModule,
  MatInputModule, MatCardModule,MatIconModule} from '@angular/material';
  


@NgModule({
  imports: [
    CommonModule,BrowserAnimationsModule,MatSnackBarModule,
    MatButtonModule, MatCheckboxModule,MatInputModule,MatCardModule,MatIconModule
  ],
  exports: [MatButtonModule, MatCheckboxModule,MatSnackBarModule,
    MatInputModule,BrowserAnimationsModule,MatCardModule,MatIconModule],
  declarations: []
})
export class MaterialModule { }
