import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';



@NgModule({
  declarations: [SupportComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SupportComponent
  ]
})
export class SupportModule { }
