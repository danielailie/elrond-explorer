import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HashService {

  constructor() { }

  getDisplayHash(text: string): string{
    var str = text
    var substring = str.substring(10, str.length - 10);
    str = str.replace(substring, "...")
    return str
  }
}
