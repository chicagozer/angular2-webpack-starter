import { Component, Injectable } from '@angular/core';
import {  Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable} from 'rxjs/Rx';
import * as io from 'socket.io-client';
import { Borough } from '../borough/borough';

@Injectable()
export class RtdbService {

  private actionUrl: string;
  private socket: any;

  private url: string = "https://rtdb.rheosoft.com";

  private ticketUrl: string = "https://rtdb.rheosoft.com/db/collections/e08e31fa-f414-4f2f-b067-6bce67fae7b0/views/90e40254-d57c-4ce5-88b5-20034c9511ec/ticket";


  constructor(private http: Http) {

  }


  public getBoroughs(): Observable<Borough[]> {


    console.log('fetching boroughs');



      return new Observable<Borough[]>((observer:any) => {

        console.log('creating socket');
        this.socket = io(this.url);


        this.socket.on('connect', () => {
            console.log('connected to socket now subscribing');
            this.http
              .get(this.ticketUrl)
              .toPromise()
              .then(response => {
                console.log("ticket is " + response.json());
                this.socket.emit('subscribe', [{
                  view: '90e40254-d57c-4ce5-88b5-20034c9511ec',
                  ticket: response.json()
                }])
              });
        });


        this.socket.on('90e40254-d57c-4ce5-88b5-20034c9511ec',
          data => {
   observer.next(data.map(i => new Borough(i[0],  i[1].fvTotal,i[1].count)));
          });

        return () => {
          this.socket.disconnect();
        };
      });


  }
}
