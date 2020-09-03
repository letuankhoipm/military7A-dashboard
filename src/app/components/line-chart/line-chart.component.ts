import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @ViewChild("line-chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor(private dashboardService: DashboardService) { 
    this.chartOptions = {
      series: [
        {
          name: "Hiện tại",
          data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
          name: "Xuất khoa",
          data: [12, 11, 14, 18, 17, 13, 13]
        },
        {
          name: "Nhập khoa",
          data: [12, 11, 14, 18, 17, 13, 13]
        },
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1,
        radius: 12
      },
      xaxis: {
        categories: ['2011', '2012', '2013'],
      },
      yaxis: {

      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      }
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
