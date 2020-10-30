import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DatetimeService } from 'src/app/datetime.service';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Transaction } from 'src/models/transaction';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css'],
})
export class TransactionDetailsComponent implements OnInit {
  constructor(
    public datetimeService: DatetimeService,
    private transactionsService: TransactionsService,
    private activatedRoute: ActivatedRoute
  ) {}
  transaction: Transaction = new Transaction();
  testEmitter$ = new BehaviorSubject<Transaction>(this.transaction);

  ngOnInit(): void {
    this.getTransactionByHash();
  }

  getTransactionByHash(): void {
    this.transactionsService
      .getTransactionById(this.activatedRoute.snapshot.params.hash)
      .subscribe((transaction) => {
        this.transaction = transaction[0];
        this.testEmitter$.next(this.transaction);
      });
  }
}
