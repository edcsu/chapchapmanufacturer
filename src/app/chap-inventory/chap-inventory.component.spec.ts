import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapInventoryComponent } from './chap-inventory.component';

describe('ChapInventoryComponent', () => {
  let component: ChapInventoryComponent;
  let fixture: ComponentFixture<ChapInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
