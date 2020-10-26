import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Block } from 'src/models/block';
import { BlocksService } from '../services/blocks.service';

@Component({
  selector: 'app-block-details',
  templateUrl: './block-details.component.html',
  styleUrls: ['./block-details.component.css']
})
export class BlockDetailsComponent implements OnInit {

  constructor(private blocksService: BlocksService,
    private activatedRoute: ActivatedRoute) { }
  block: Block

  ngOnInit(): void {
    this.getBlockByHash()
  }

  getBlockByHash(): void {
    this.blocksService.getBlockById(this.activatedRoute.snapshot.params.hash)
        .subscribe((block) => {
          this.block = block
          console.log("details ", block)
        });
  }

}
