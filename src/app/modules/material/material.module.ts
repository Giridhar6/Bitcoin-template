import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatTabsModule,
  MatGridListModule,
  MatProgressBarModule,
  MatInputModule,
  MatCardModule,
  MatDialogModule,
  MatMenuModule
 } from '@angular/material';

// MaterialModule defines Angular material components that are used inside app
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatTabsModule,
    MatGridListModule,
    MatProgressBarModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatTabsModule,
    MatGridListModule,
    MatProgressBarModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule
  ],
  declarations: []
})
export class MaterialModule { }
