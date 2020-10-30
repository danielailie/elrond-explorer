import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DatetimeService } from 'src/app/datetime.service';
import { HashService } from 'src/app/hash.service';
import { Transaction } from 'src/models/transaction';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css']
})
export class TransactionsTableComponent implements OnInit {
  displayedColumns: string[] = ['Hash', 'Age', 'Shard', 'From', 'To', 'Value'];  
  
  @Input() dataSource : MatTableDataSource<Transaction>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public datetimeService:DatetimeService, public hashService:HashService) { }

  ngOnInit(): void {
  }

}
