import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};

@Component({
  selector: 'app-stacked-chart',
  templateUrl: './stacked-chart.component.html',
  styleUrls: ['./stacked-chart.component.scss'],
})
export class StackedChartComponent implements OnInit {
  @ViewChild('stacked-chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor(private dashboardService: DashboardService) {
    this.chartOptions = {
      series: [
        {
          name: 'Đã khám',
          data: [44, 55, 41, 67, 22, 43, 12, 12, 16, 12, 12],
        },
        {
          name: 'Chưa khám',
          data: [13, 23, 20, 8, 13, 27, 12, 12, 16, 12, 12],
        },
        {
          name: 'Chờ kết quả',
          data: [11, 17, 15, 15, 21, 14, 12, 12, 16, 12, 12],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        type: 'category',
        categories: [
          'Khoa Tim mạch',
          'Khoa Thận',
          'Khoa Chấn thương chỉnh hình',
        ],
      },
      legend: {
        position: 'top',
        markers: {
          radius: 12,
        },
      },
      fill: {
        opacity: 1,
      },
    };
  }

  ngOnInit(): void {
    this.dashboardService.getDptDetail().subscribe((res) => {
      this.chartOptions.series = [
        {
          name: 'Đã khám',
          data: res['DaKham'].map((x) => x.SoLuong),
        },
        {
          name: 'Chưa khám',
          data: res['ChuaKham'].map((x) => x.SoLuong),
        },
        {
          name: 'Chờ kết quả',
          data: res['ChoKham'].map((x) => x.SoLuong),
        },
      ];
    });
  }
}
