import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'src/models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  constructor(private http: HttpClient) {}

  private transactionsUrl = 'http://localhost:3000/transactions';
  private getTransactionByHashUrl = 'http://localhost:3000/transactions?Hash={hash}';

  getTransactions(): Observable<Transaction[]> {
    console.log("Helloooo ")
    return this.http.get<Transaction[]>(this.transactionsUrl);
  }

  getTransactionById(hash: string): Observable<Transaction> {
    return this.http.get<Transaction>(this.getTransactionByHashUrl.replace("{hash}", hash));
  }
}
