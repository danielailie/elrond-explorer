import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class DatetimeService {
  constructor() {}

  getDisplayDate(timestamp: number): string{
    return new Date(timestamp*1000).toLocaleString()
  }

  getAge(timestamp: number): string{
    let date = moment.unix(timestamp);
    let now = moment();
    var days = now.diff(date, 'days');
    var hours = (now.diff(date, 'hours'))% 24;
    var minutes = now.diff(date, 'minutes') % 60;
    var seconds = now.diff(date, 'seconds') % 60;

    let difference = '';
    if (days > 0) {
      difference += (days === 1) ? `${days} day ` : `${days} days `;
      difference += (hours === 0) ? `` : `${hours} hr `;
      return difference;
    }
    difference += (hours === 0) ? `` : `${hours} hr `;
    difference += (minutes === 0) ? `` : `${minutes} min `; 
    difference += (seconds === 0) ? `` : `${seconds} sec `; 

    return difference;
  }
}
