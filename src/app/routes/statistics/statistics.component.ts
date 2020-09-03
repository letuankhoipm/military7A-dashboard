import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  title = 'Thống kê <strong class="text-primary">Báo cáo</strong>';
  desc = 'Thống kê tình hình khám ngoại trú';
  constructor(private dashboardService: DashboardService) {}
  listLabels1 = ['Theo yêu cầu', 'BHYT', 'BHYT'];
  listData1 = [300, 1000, 400];

  examsTurnLabel;
  examsTurnData;

  examsResultLabel;
  examsResultData;

  data1;
  label1;

  data2;
  label2;

  data3;
  label3;

  listLabels2 = [
    'Nhập viện',
    'Kê toa cho về',
    'Cho về không toa',
    'Chuyển viện',
    'Khác',
  ];
  listData2 = [80, 400, 200, 30, 40];
  ngOnInit(): void {
    this.getExamsTurn();
    this.getExamsResult();
    this.getCanLamSang();
  }

  getExamsTurn() {
    this.dashboardService.getExamAmount().subscribe((res) => {
      this.examsTurnLabel = res.map(x => x.key);
      this.examsTurnData = res.map(x => x.value);  
    })
  }

  getExamsResult() {
    this.dashboardService.getExamResult().subscribe((res) => {
      this.examsResultLabel = res.map(x => x.key);
      this.examsResultData = res.map(x => x.value);
    })
  }

  getCanLamSang() {
    this.dashboardService.getClinicalStats().subscribe((res) => {
      const data1 = res['xahoihoa'];
      this.data1 = data1.map(x => x.value);
      this.label1 = data1.map(x => x.name);
      const data2 = res['ngansach'];
      this.data2 = data2.map(x => x.value);
      this.label2 = data2.map(x => x.name);
      const data3 = res['tong'];
      this.data3 = data3.map(x => x.value);
      this.label3 = data3.map(x => x.name);
    })
  }
}
