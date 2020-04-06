import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatCardModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule
 } from '@angular/material';


@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatCardModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule, 
  
  ],
  exports: [
    SpinnerComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class SharedModule { }
