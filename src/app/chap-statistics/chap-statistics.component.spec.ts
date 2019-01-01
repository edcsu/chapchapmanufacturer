import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapStatisticsComponent } from './chap-statistics.component';

describe('ChapStatisticsComponent', () => {
  let component: ChapStatisticsComponent;
  let fixture: ComponentFixture<ChapStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
