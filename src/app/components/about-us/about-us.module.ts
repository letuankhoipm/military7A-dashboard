import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [AboutUsComponent]
})
export class AboutUsModule { }
