import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Transaction } from 'src/models/transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[];
  dataSource: MatTableDataSource<Transaction>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private transactionsService: TransactionsService
  ) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
   interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.transactionsService.getTransactions())
      )
      .subscribe((transactions) => {
        this.transactions = transactions;
        this.dataSource = new MatTableDataSource<Transaction>(
          this.transactions
        ); 
        this.dataSource.paginator = this.paginator;
      });
  }
}
