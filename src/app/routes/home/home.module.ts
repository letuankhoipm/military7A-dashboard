import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from '@components/carousel/carousel.module';
import { SupportModule } from '@components/support/support.module';
import { SequenceModule } from '@components/sequence/sequence.module';
import { AboutUsModule } from '@components/about-us/about-us.module';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    }
  ];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    CarouselModule,
    SupportModule,
    SequenceModule,
    AboutUsModule
  ]
})
export class HomeModule { }
