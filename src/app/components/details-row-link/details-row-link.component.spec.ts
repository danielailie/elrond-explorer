import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRowLinkComponent } from './details-row-link.component';

describe('DetailsRowLinkComponent', () => {
  let component: DetailsRowLinkComponent;
  let fixture: ComponentFixture<DetailsRowLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRowLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsRowLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
