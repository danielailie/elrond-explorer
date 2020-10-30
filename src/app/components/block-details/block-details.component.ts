import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BlocksService } from 'src/app/services/blocks.service';
import { DatetimeService } from 'src/app/services/datetime.service';
import { Block } from 'src/models/block';

@Component({
  selector: 'app-block-details',
  templateUrl: './block-details.component.html',
  styleUrls: ['./block-details.component.css'],
})
export class BlockDetailsComponent implements OnInit {
  constructor(
    public datetimeService: DatetimeService,
    private blocksService: BlocksService,
    private activatedRoute: ActivatedRoute
  ) {}
  block: Block = new Block();
  blockEmitter$ = new BehaviorSubject<Block>(this.block);

  ngOnInit(): void {
    this.getBlockByHash();
  }

  getBlockByHash(): void {
    this.blocksService
      .getBlockById(this.activatedRoute.snapshot.params.hash)
      .subscribe((block) => {
        this.block = block[0];
        this.blockEmitter$.next(this.block);
        console.log('details ', block);
      });
  }
}
