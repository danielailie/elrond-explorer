import { Component, OnInit } from '@angular/core';
import { Stats } from 'src/models/stats';
import { BehaviorSubject } from 'rxjs';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

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
