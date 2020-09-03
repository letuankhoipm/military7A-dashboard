import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseService {

  getExamAmount() {
    let routes = `${environment.URL}/khambenh/luotkham`;
    return this.get(routes);
  }

  getExamResult() {
    let routes = `${environment.URL}/khambenh/ketquakham`;
    return this.get(routes);
  }

  getDptDetail() {
    let routes = `${environment.URL}/khambenh/ctphongkham`;
    return this.get(routes);
  }

  getDomesticStats() {
    let routes = `${environment.URL}/khambenh/thongkenoitru`;
    return this.get(routes);
  }

  getClinicalStats() {
    let routes = `${environment.URL}/khambenh/thongkecanlamsan`;
    return this.get(routes);
  }

  getCashflow() {
    let routes = `${environment.URL}/taichinh/chitieu`;
    return this.get(routes);
  }

  getIncomeByGroup() {
    let routes = `${environment.URL}/taichinh/doanhthutheonhom`;
    return this.get(routes);
  }

  getProfit() {
    let routes = `${environment.URL}/taichinh/doanhthucanlamsan`;
    return this.get(routes);
  }

}
