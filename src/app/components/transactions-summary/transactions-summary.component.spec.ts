import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsSummaryComponent } from './transactions-summary.component';

describe('TransactionsSummaryComponent', () => {
  let component: TransactionsSummaryComponent;
  let fixture: ComponentFixture<TransactionsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
