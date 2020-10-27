import { Component, OnInit } from '@angular/core';
import { BlocksService } from 'src/app/services/blocks.service';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Block } from 'src/models/block';
import { Transaction } from 'src/models/transaction';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private transactionsService: TransactionsService, private blocksService: BlocksService) { }
  transactions: Transaction[]; 
  blocks: Block[]; 

  ngOnInit(): void {
    this.getTransactions()
  }

  getTransactions(): void {
    this.transactionsService.getTransactions()
        .subscribe((transactions) => {     
          this.transactions = transactions     
          console.log("transactions ", this.transactions)
        });
  }

  getBlocks(): void {
    this.blocksService.getBlocks()
        .subscribe((blocks) => {
          this.blocks = blocks
          console.log("Blocks ", this.blocks)
        });
  }
}
