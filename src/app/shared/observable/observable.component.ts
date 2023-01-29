import { Component, OnInit } from '@angular/core';
import { HearingService } from './services/hearing.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  // compareEx: number = 1

  // constructor(
  // private hearing : HearingService
  // ){}
  ngOnInit(): void {
  // this.hearing.next(this.compareEx)
   }
  
}
