import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { environment } from '@env/environment';
export interface CustomResponse {
  status: boolean;
  message: string;
  [key: string]: any;
}
@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private customHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.customHeaders.append('Content-Type', 'application/json');
  }
  get(apiEndpoint, param?) {
    if (param) {
      apiEndpoint = this.createParams(apiEndpoint, param);
    }
    return this.http.get<CustomResponse>(apiEndpoint).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  post(url, data) {
    return this.http.post(url, data).pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }

  createParams(routes, params) {
    Object.keys(params).map((key) => {
      if (params[key]) {
        routes += `${key}=${params[key]}&`;
      }
    });
    return (routes = routes.substring(0, routes.length - 1));
  }

  protected handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  public getToken = () => {
    return '';
  };
}
