import { Injectable } from '@angular/core';
import {  Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { Dealer } from './dealer';

@Injectable()
export class DealerService {
  private dealersUrl = 'http://localhost:10080/api/client/v1/lookup/dealers';  // URL to web api
  private options: RequestOptions = null;


  constructor(private http: Http) {
    let myheaders = new Headers();

    myheaders.set('Content-Type', 'application/json;charset=UTF-8');
    myheaders.set('Authorization', 'Basic ' + btoa('vdms' + ':' + 'password'));

    this.options = new RequestOptions({ headers: myheaders, body: '', withCredentials: true  });
  }



  getDealers(): Observable<Dealer[]> {
    return this.http
      .get(this.dealersUrl, this.options)
      .map(response => response.json());

  }





  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
