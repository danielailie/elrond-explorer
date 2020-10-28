import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StatsService } from 'src/app/services/stats.service';
import { Stats } from 'src/models/stats';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  
  constructor(private statsService: StatsService) { }
  stats: Stats = new Stats;
  testEmitter$ = new BehaviorSubject<Stats>(this.stats);

  ngOnInit(): void {
    this.getStats()
  }
  getStats(): void {
    this.statsService.getStats()
        .subscribe((stats) => {
          this.stats = stats
          this.testEmitter$.next(this.stats);
          console.log("Stats ", stats)
        });
  }

}
