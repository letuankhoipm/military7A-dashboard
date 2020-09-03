import { Component, OnInit, ViewChild, Input } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexPlotOptions,
  ApexLegend,
  ApexDataLabels,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  @ViewChild('chart') chart: PieChartComponent;
  @Input() listLabels;
  @Input() data;
  @Input() legendAlign;
  renderLabels = []
  renderData = []
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      series: this.renderData,
      chart: {
        type: 'donut',
      },
      labels: this.renderLabels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      legend: {
        position: 'bottom',
        show: true,
        horizontalAlign: 'left'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '22px',
              },
              value: {
                show: true,
                fontSize: '22px',
              },
              total: {
                show: true,
                showAlways: true,
                label: 'Tổng',
                fontSize: '22px',
              },
            },
          },
        },
      },
    };
  }

  ngOnInit(): void {
    this.chartOptions.series = this.data;
    this.chartOptions.labels = this.listLabels;
    this.chartOptions.legend.horizontalAlign = this.legendAlign;
  }
}
