import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { AddressService } from 'src/app/services/address.service';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Address } from 'src/models/address';
import { Transaction } from 'src/models/transaction';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css'],
})
export class AddressDetailsComponent implements OnInit {
  address: Address = new Address();
  addressEmitter$ = new BehaviorSubject<Address>(this.address);
  transactions: Transaction[] = new Array<Transaction>();
  dataSource: MatTableDataSource<Transaction>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private addressService: AddressService,
    private transactionsService: TransactionsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAddressByHash();
    this.getTransactions();
  }

  getAddressByHash(): void {
    this.addressService
      .getAddressByHash(this.activatedRoute.snapshot.params.hash)
      .subscribe((address) => {
        this.address = address[0];
        this.addressEmitter$.next(this.address);
      });
  }

  getTransactions(): void {
    const receiver$ = this.transactionsService.getTransactionsByAddressForReceiver(
      this.activatedRoute.snapshot.params.hash
    );
    const sender$ = this.transactionsService.getTransactionsByAddressForSender(
      this.activatedRoute.snapshot.params.hash
    );
    forkJoin([receiver$, sender$]).subscribe((transactions) => {
      this.transactions = this.transactions.concat(transactions[0]);
      this.transactions = this.transactions.concat(transactions[1]);
      this.dataSource = new MatTableDataSource<Transaction>(this.transactions);
      this.dataSource.paginator = this.paginator;
    });
  }
}
