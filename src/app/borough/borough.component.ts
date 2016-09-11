import { Component } from '@angular/core';
import { Borough } from './borough';
import { Observable} from 'rxjs/Rx';

import { RtdbService } from '../rtdb/rtdb.service';



@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'borough',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './borough.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './borough.template.html'
})
export class BoroughComponent {
 // boroughs: Borough[] = [];
  boroughs: Observable<Borough[]>;


  // TypeScript public modifiers
  constructor(
              private rtdbService: RtdbService) {

  }

  getBoroughs(): void {
   // this.rtdbService
   //   .getBoroughs()
   //   .subscribe(boroughs => this.boroughs = boroughs);
    this.boroughs = this.rtdbService.getBoroughs();
  }

  ngOnInit() {


    this.getBoroughs();
    console.log('hello `Borough` component');

  }


}
