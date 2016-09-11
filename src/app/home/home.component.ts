import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLarge } from './x-large';

import { Dealer } from  '../dealer/dealer';
import { DealerService } from '../dealer/dealer.service';



@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.template.html'
})
export class Home {
  dealers: Dealer[] = [];

  // Set our default values
  localState = { value: '' };




  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title,
  private dealerService: DealerService) {

  }

  getDealers(): void {
    this.dealerService
      .getDealers()
      .subscribe(dealers => this.dealers = dealers);
  }

  ngOnInit() {


    this.getDealers();
    console.log('hello `Home` component');

  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
