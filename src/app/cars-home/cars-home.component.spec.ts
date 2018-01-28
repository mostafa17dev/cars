import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsHomeComponent } from './cars-home.component';

describe('CarsHomeComponent', () => {
  let component: CarsHomeComponent;
  let fixture: ComponentFixture<CarsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
