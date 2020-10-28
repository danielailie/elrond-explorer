import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatDetailsComponent } from './stat-details.component';

describe('StatDetailsComponent', () => {
  let component: StatDetailsComponent;
  let fixture: ComponentFixture<StatDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
