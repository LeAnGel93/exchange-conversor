import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { HearingService } from 'src/app/shared/observable/services/hearing.service';
import { ExchangeService } from './services/exchange.service'

@Component({
  selector: 'app-exchange-page',
  templateUrl: './exchange-page.component.html',
  styleUrls: ['./exchange-page.component.scss']
})
export class ExchangePageComponent implements OnInit, OnDestroy{

  constructor(
    private exchangeService: ExchangeService,
    private hearService: HearingService
  ){}

  @Output() cosa = new EventEmitter<string>();

  sendExchanges() {
    this.cosa.emit(this.exchanges)
  }



  exchanges: any;
  compareEx: number = 1;
  coinType: string = 'EUR';

  getExchanges(a: string):any {
    this.exchangeService.getExchanges(a).subscribe((res: any) => {
    this.exchanges = res;
    this.hearService.update(this.exchanges)
      })
      console.log(a);
  }


  ngOnInit(): any {
    

  }

  ngOnDestroy(): void {

  }
}
