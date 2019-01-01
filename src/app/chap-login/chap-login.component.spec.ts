import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapLoginComponent } from './chap-login.component';

describe('ChapLoginComponent', () => {
  let component: ChapLoginComponent;
  let fixture: ComponentFixture<ChapLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
