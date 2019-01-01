import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapPieComponent } from './chap-pie.component';

describe('ChapPieComponent', () => {
  let component: ChapPieComponent;
  let fixture: ComponentFixture<ChapPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
