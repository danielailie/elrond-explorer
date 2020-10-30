import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from 'src/models/address';
import { Transaction } from 'src/models/transaction';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor(private http: HttpClient) {}

  private addressesUrl = 'http://localhost:3000/addresses';
  private getAddressByHashUrl = 'http://localhost:3000/addresses?address={hash}';

  getAddresses(): Observable<Address[]> {
        return this.http.get<Address[]>(this.addressesUrl);
  }

  getAddressByHash(hash: string): Observable<Address> {
     return this.http.get<Address>(this.getAddressByHashUrl.replace("{hash}", hash));
  }

  getTransactionsForAddressHash(hash: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.getAddressByHashUrl.replace("{hash}", hash));
 }
}
