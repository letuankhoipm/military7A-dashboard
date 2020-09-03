import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexTooltip,
  ApexFill,
  ApexLegend,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  fill: ApexFill;
  legend: ApexLegend;
};
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  @ViewChild('bar-chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor(private dashboardService: DashboardService) {
    this.chartOptions = {
      series: [
        {
          name: 'Hiện tại',
          data: [],
        },
        {
          name: 'Xuất khoa',
          data: [],
        },
        {
          name: 'Nhập khoa',
          data: [],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      xaxis: {
        categories: [
          '2011',
          '2012',
          '2013',
        ],
        labels: {
          formatter: function (val) {
            return val;
          },
        },
      },
      yaxis: {
        title: {
          text: undefined,
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + 'K';
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
        markers: {
          radius: 12,
        },
      },
    };
  }

  ngOnInit(): void {
    this.dashboardService.getDomesticStats().subscribe((res) => {
      this.chartOptions.series = [
        {
          name: 'Hiện tại',
          data: res['hientai'].map((x) => x.value),
        },
        {
          name: 'Nhập khoa',
          data: res['nhapkhoa'].map((x) => x.value),
        },
        {
          name: 'Xuất khoa',
          data: res['xuatkhoa'].map((x) => x.value),
        },
      ];
    });
  }
}
