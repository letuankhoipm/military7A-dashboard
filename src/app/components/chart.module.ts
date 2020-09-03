import { ColumnChartComponent } from './column-chart/column-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { GatoChartComponent } from './gato-chart/gato-chart.component';
import { StackedChartComponent } from './stacked-chart/stacked-chart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [
    StackedChartComponent,
    GatoChartComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    ColumnChartComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule
  ],
  exports: [
    StackedChartComponent,
    GatoChartComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    ColumnChartComponent
  ]
})
export class ChartModule { }
