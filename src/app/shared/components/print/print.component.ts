import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ExchangePageComponent } from 'src/app/pages/exchange-page/exchange-page.component';
import { HearingService } from '../../observable/services/hearing.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit, OnChanges {

  allExchanges: any

  constructor (
    private exchpage: ExchangePageComponent, 
    private hearservice: HearingService
    ){}

    receiveExchanges($event: any) {
      this.allExchanges = $event
      console.log($event);
      console.log("jelou");
      
    }

  exchangedb() :any {
    return this.allExchanges
  }

  multiplierEx(value: any): number{
    let things: any = value*this.exchpage.compareEx
   return things.toFixed(2)
  }

  ngOnInit() {
    this.allExchanges = this.exchpage.exchanges
    this.hearservice.obs().subscribe((exchange: any) =>{
      this.allExchanges = exchange
    })
  } 

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}

