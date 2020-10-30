import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { BlocksService } from 'src/app/services/blocks.service';
import { DatetimeService } from 'src/app/services/datetime.service';
import { HashService } from 'src/app/services/hash.service';
import { Block } from 'src/models/block';

@Component({
  selector: 'app-blocks-summary',
  templateUrl: './blocks-summary.component.html',
  styleUrls: ['./blocks-summary.component.css'],
})
export class BlocksSummaryComponent implements OnInit {
  blocks: Block[];

  constructor(
    public datetimeService: DatetimeService,
    public hashService: HashService,
    private blocksService: BlocksService
  ) {}

  ngOnInit(): void {
    this.getBlocks();
  }
  getBlocks(): void {
    interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.blocksService.getBlocks())
      )
      .subscribe((blocks) => {
        this.blocks = blocks;
      });
  }
}
