import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Transaction } from 'src/models/transaction';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {

  constructor(private transactionsService: TransactionsService,
    private activatedRoute: ActivatedRoute) { }
    transaction: Transaction = new Transaction
    testEmitter$ = new BehaviorSubject<Transaction>(this.transaction);

  ngOnInit(): void {
    this.getTransactionByHash()
  }

  getTransactionByHash(): void {
    this.transactionsService.getTransactionById(this.activatedRoute.snapshot.params.hash)
        .subscribe((transaction) => {
          this.transaction = transaction[0]
          this.testEmitter$.next(this.transaction);
          console.log("details ", transaction)
        });
  }

}
