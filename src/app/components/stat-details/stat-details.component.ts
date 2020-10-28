import { Component, Input, OnInit } from '@angular/core';
import { StatDetails } from 'src/models/stat-details';

@Component({
  selector: 'app-stat-details',
  templateUrl: './stat-details.component.html',
  styleUrls: ['./stat-details.component.css']
})
export class StatDetailsComponent implements OnInit {

  @Input() statLabel: string;
  @Input() statValue: number;
  constructor() { }

  ngOnInit(): void {
  }

}
