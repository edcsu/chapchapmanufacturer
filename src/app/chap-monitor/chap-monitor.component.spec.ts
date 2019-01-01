import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapMonitorComponent } from './chap-monitor.component';

describe('ChapMonitorComponent', () => {
  let component: ChapMonitorComponent;
  let fixture: ComponentFixture<ChapMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
