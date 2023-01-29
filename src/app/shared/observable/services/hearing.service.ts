import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HearingService {

  constructor() { }
  private hearingEx = new Subject();

  update(newValue: any) {
    this.hearingEx.next(newValue)
  }

  obs():any {
    return this.hearingEx;
  }

}
