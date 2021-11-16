import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodayService {

  constructor() { }

  getDate():Date{
    return new Date();
  }
  
}
