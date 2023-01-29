import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeService } from 'src/app/pages/exchange-page/services/exchange.service';
import { PrintRoutingModule } from './print-routing.module';
import { PrintComponent } from './print.component';


@NgModule({
  declarations: [
    PrintComponent
  ],
  imports: [
    CommonModule,
    PrintRoutingModule,
    ExchangeService
  ]
})
export class PrintModule { }
