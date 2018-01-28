import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatToolbarModule,MatGridListModule,MatTableModule,MatFormFieldModule,MatInputModule,MatPaginatorModule, MatSortModule, MatCardModule,MatSlideToggleModule, MatProgressBarModule, MatListModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule,MatToolbarModule,MatGridListModule,MatTableModule, MatFormFieldModule,MatInputModule,MatPaginatorModule, MatSortModule, MatCardModule,MatSlideToggleModule, MatProgressBarModule, MatListModule, MatDialogModule],
  exports: [MatButtonModule,MatToolbarModule,MatGridListModule,MatTableModule, MatFormFieldModule,MatInputModule,MatPaginatorModule, MatSortModule, MatCardModule,MatSlideToggleModule, MatProgressBarModule, MatListModule, MatDialogModule],
})
export class MaterialM { }