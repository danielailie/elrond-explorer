import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-row-link',
  templateUrl: './details-row-link.component.html',
  styleUrls: ['./details-row-link.component.css']
})
export class DetailsRowLinkComponent implements OnInit {
  @Input() label: string;
  @Input() value: any;  
  @Input() href: any;
  constructor() { }

  ngOnInit(): void {
  }

}
