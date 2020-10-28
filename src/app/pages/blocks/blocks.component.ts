import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { interval } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';
import { BlocksService } from 'src/app/services/blocks.service';
import { Block } from 'src/models/block';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {  
  displayedColumns: string[] = ['Block', 'Age', 'Txns', 'Shard', 'Size', 'BlockHash'];    
  blocks: Block[]; 
  dataSource : MatTableDataSource<Block>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private blocksService: BlocksService) { }

  ngOnInit(): void {
    this.getBlocks();
  }

  getBlocks(): void{
    interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.blocksService.getBlocks())
      ).subscribe((blocks) => {
        this.blocks = blocks
        this.dataSource = new MatTableDataSource<Block>(this.blocks);
        this.dataSource.paginator = this.paginator
        console.log("Blocks ", this.blocks)})
  }

   
  getDisplayHash(text: string): string{
    var str = text
    var substring = str.substring(10, str.length - 10);
    str = str.replace(substring, "...")
    return str
  }
}
