import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapAdminComponent } from './chap-admin.component';

describe('ChapAdminComponent', () => {
  let component: ChapAdminComponent;
  let fixture: ComponentFixture<ChapAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
