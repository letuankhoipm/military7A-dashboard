import { FooterModule } from './../../components/footer/footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '@components/navbar/navbar.module';
import { MainLayoutRoutingModule } from './main-layout.routing';



@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule,
    FooterModule,
    MainLayoutRoutingModule
  ]
})
export class MainLayoutModule { }
