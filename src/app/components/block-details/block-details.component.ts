import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DatetimeService } from 'src/app/datetime.service';
import { BlocksService } from 'src/app/services/blocks.service';
import { Block } from 'src/models/block';

@Component({
  selector: 'app-block-details',
  templateUrl: './block-details.component.html',
  styleUrls: ['./block-details.component.css']
})
export class BlockDetailsComponent implements OnInit {

  constructor(private blocksService: BlocksService,
    private activatedRoute: ActivatedRoute,
    private datetimeService: DatetimeService) { }
  block: Block = new Block
  testEmitter$ = new BehaviorSubject<Block>(this.block);

  ngOnInit(): void {
    this.getBlockByHash()
  }

  getBlockByHash(): void {
    this.blocksService.getBlockById(this.activatedRoute.snapshot.params.hash)
        .subscribe((block) => {
          this.block = block[0]
          this.testEmitter$.next(this.block);
          console.log("details ", block)
        });
  }

  getDisplayDate(timestamp: number): string{
    return new Date(timestamp*1000).toLocaleString()
  }
}
