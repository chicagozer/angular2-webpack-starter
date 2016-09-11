/**
 * Created by jmittler on 9/8/16.
 */

import { DealerService } from './dealer.service';
import { Dealer } from './dealer';
import { async, inject, TestBed } from  '@angular/core/testing';
import { HttpModule } from '@angular/http';

describe('Dealer Service', () => {

  beforeEach(() => { TestBed.configureTestingModule({
    providers: [
      DealerService
    ],
      imports: [HttpModule]
  });

  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000; }

  );

 // it('dealers length', inject([ DealerService ]), (dealerService: DealerService) =>
 //   dealerService.getDealers().subscribe( (dealers: Dealer[] ) => {
 //   expect(dealers.length).toBe(1);
 // }));

  it('dealer response', async(inject([ DealerService ],
    (dealerService: DealerService) =>
      dealerService.getDealers().subscribe( (dealers: Dealer[] ) => {
        expect(dealers.length).toBe(11444);
      }))));

});
