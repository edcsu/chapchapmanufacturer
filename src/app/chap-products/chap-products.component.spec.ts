import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapProductsComponent } from './chap-products.component';

describe('ChapProductsComponent', () => {
  let component: ChapProductsComponent;
  let fixture: ComponentFixture<ChapProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
