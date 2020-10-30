import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksSummaryComponent } from './blocks-summary.component';

describe('BlocksSummaryComponent', () => {
  let component: BlocksSummaryComponent;
  let fixture: ComponentFixture<BlocksSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocksSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
