import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stats } from 'src/models/stats';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  constructor(private http: HttpClient) {}

  private statsUrl = 'http://localhost:3000/stats';

  getStats(): Observable<Stats> {
    return this.http.get<Stats>(this.statsUrl);
  }
}
