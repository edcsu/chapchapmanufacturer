import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapCartDetailComponent } from './chap-cart-detail.component';

describe('ChapCartDetailComponent', () => {
  let component: ChapCartDetailComponent;
  let fixture: ComponentFixture<ChapCartDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapCartDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapCartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
