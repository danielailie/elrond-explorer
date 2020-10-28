import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatetimeService {
  constructor() {}

  public getDateFromTimeStamp(timestamp: number): Date {
    let newDate = new Date(timestamp);
    console.log(newDate.toLocaleString())

    return newDate;
  }
}
