import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangePageRoutingModule } from './exchange-page-routing.module';
import { ExchangePageComponent } from './exchange-page.component';
import { HttpClientModule } from '@angular/common/http';
import { PrintComponent } from 'src/app/shared/components/print/print.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExchangePageComponent,
    PrintComponent
  ],
  imports: [
    CommonModule,
    ExchangePageRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ExchangePageModule { }
