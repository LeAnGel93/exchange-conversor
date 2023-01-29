import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private http: HttpClient) { }

  DB_URL: string = "https://api.vatcomply.com/rates?base="

  // getExchanges(filter: string){
  //   return this.http.get(this.DB_URL + filter ? this.DB_URL + filter : this.DB_URL + "EUR")
  // }
   getExchanges(filter: string){
    return this.http.get(this.DB_URL + filter)
  }




}
