import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SequenceComponent } from './sequence.component';



@NgModule({
  declarations: [SequenceComponent],
  imports: [
    CommonModule
  ],
  exports: [SequenceComponent]
})
export class SequenceModule { }
