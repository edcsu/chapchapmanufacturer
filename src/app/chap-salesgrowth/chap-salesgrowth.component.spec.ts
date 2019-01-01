import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapSalesgrowthComponent } from './chap-salesgrowth.component';

describe('ChapSalesgrowthComponent', () => {
  let component: ChapSalesgrowthComponent;
  let fixture: ComponentFixture<ChapSalesgrowthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapSalesgrowthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapSalesgrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
