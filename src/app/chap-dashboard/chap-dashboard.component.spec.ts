
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapDashboardComponent } from './chap-dashboard.component';

describe('ChapDashboardComponent', () => {
  let component: ChapDashboardComponent;
  let fixture: ComponentFixture<ChapDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
