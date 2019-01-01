import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapProductsalesComponent } from './chap-productsales.component';

describe('ChapProductsalesComponent', () => {
  let component: ChapProductsalesComponent;
  let fixture: ComponentFixture<ChapProductsalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapProductsalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapProductsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
