import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Transaction } from 'src/models/transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements AfterViewInit {

  displayedColumns: string[] = ['Hash', 'Age', 'Shard', 'From', 'To', 'Value'];  
  
  transactions: Transaction[]; 
  dataSource : MatTableDataSource<Transaction>;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private transactionsService: TransactionsService) { }

  ngAfterViewInit(): void {
    this.getTransactions()
  }

  getTransactions(): void {
    this.transactionsService.getTransactions()
        .subscribe((transactions) => {     
          this.transactions = transactions     
          this.dataSource = new MatTableDataSource<Transaction>(this.transactions);
          this.dataSource.paginator = this.paginator
        });
  }

}
