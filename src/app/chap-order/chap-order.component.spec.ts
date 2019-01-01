import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapOrderComponent } from './chap-order.component';

describe('ChapOrderComponent', () => {
  let component: ChapOrderComponent;
  let fixture: ComponentFixture<ChapOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
