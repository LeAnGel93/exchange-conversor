import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)},
  {path: 'exchange', loadChildren: () => import('./pages/exchange-page/exchange-page.module').then(m => m.ExchangePageModule)},
  { path: '', redirectTo: 'home', pathMatch: 'full' } //esta ruta nos indica que cuando no especificamos una url, nos lleve a home.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
