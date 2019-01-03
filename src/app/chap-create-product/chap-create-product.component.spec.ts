import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapCreateProductComponent } from './chap-create-product.component';

describe('ChapCreateProductComponent', () => {
  let component: ChapCreateProductComponent;
  let fixture: ComponentFixture<ChapCreateProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapCreateProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapCreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
