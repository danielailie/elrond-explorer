import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { BlocksService } from 'src/app/services/blocks.service';
import { Block } from 'src/models/block';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements AfterViewInit {  
  displayedColumns: string[] = ['Block', 'Age', 'Txns', 'Shard', 'Size', 'BlockHash'];  
  
  blocks: Block[]; 
  dataSource : MatTableDataSource<Block>;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private blocksService: BlocksService) { }

  ngAfterViewInit(): void {
    this.getBlocks()
  }

  getBlocks(): void {
    this.blocksService.getBlocks()
        .subscribe((blocks) => {
          this.blocks = blocks
          this.dataSource = new MatTableDataSource<Block>(this.blocks);
          this.dataSource.paginator = this.paginator
          console.log("Blocks ", this.blocks)
        });
  }
}
