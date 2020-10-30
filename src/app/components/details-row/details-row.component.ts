import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-row',
  templateUrl: './details-row.component.html',
  styleUrls: ['./details-row.component.css']
})
export class DetailsRowComponent implements OnInit {
  @Input() label: string;
  @Input() value: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
