import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangePageComponent } from './exchange-page.component';

const routes: Routes = [
  {
    path: '', component: ExchangePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangePageRoutingModule {}
