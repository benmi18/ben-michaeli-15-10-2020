import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatSnackBarModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonToggleModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
