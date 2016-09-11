import {
  inject,
  TestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import { AppState } from '../app.service';
import { NgPage } from './ngpage.component';

describe('NgPage', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http,
        useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
      AppState,
      Title,
      NgPage
    ]
  }));

  it('should have default data', inject([ NgPage ], (ngpage: NgPage) => {
    expect(ngpage.localState).toEqual({ value: '' });
  }));


  it('should log ngOnInit', inject([ NgPage ], (ngpage: NgPage) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    ngpage.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
