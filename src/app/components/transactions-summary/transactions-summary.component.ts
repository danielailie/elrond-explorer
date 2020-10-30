import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { DatetimeService } from 'src/app/datetime.service';
import { HashService } from 'src/app/hash.service';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Transaction } from 'src/models/transaction';

@Component({
  selector: 'app-transactions-summary',
  templateUrl: './transactions-summary.component.html',
  styleUrls: ['./transactions-summary.component.css'],
})
export class TransactionsSummaryComponent implements OnInit {
  transactions: Transaction[];
  constructor(
    public datetimeService: DatetimeService,
    public hashService: HashService,
    private transactionsService: TransactionsService
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
      });
  }
}
