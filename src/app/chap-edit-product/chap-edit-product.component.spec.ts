import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapEditProductComponent } from './chap-edit-product.component';

describe('ChapEditProductComponent', () => {
  let component: ChapEditProductComponent;
  let fixture: ComponentFixture<ChapEditProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapEditProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
