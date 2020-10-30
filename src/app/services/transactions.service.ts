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
  
  private getTransactionByAddressReceiverUrl = 'http://localhost:3000/transactions?Receiver={hash}';
  private getTransactionByAddressSenderUrl = 'http://localhost:3000/transactions?Sender={hash}';

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionsUrl);
  }

  getTransactionById(hash: string): Observable<Transaction> {
    return this.http.get<Transaction>(this.getTransactionByHashUrl.replace("{hash}", hash));
  }

  getTransactionsByAddressForReceiver(hash: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.getTransactionByAddressReceiverUrl.replace("{hash}", hash));
  }
  getTransactionsByAddressForSender(hash: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.getTransactionByAddressSenderUrl.replace("{hash}", hash));
  }
}
