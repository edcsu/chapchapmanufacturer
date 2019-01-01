import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapHelpComponent } from './chap-help.component';

describe('ChapHelpComponent', () => {
  let component: ChapHelpComponent;
  let fixture: ComponentFixture<ChapHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
