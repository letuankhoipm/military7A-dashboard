import { ChartModule } from './../../components/chart.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { HeaderModule } from '@components/header/header.module';

const routes: Routes = [
  {
    path: '',
    component: StatisticsComponent,
  },
];

@NgModule({
  declarations: [StatisticsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule,
    ChartModule,
  ],
})
export class StatisticsModule {}
