import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapContactComponent } from './chap-contact.component';

describe('ChapContactComponent', () => {
  let component: ChapContactComponent;
  let fixture: ComponentFixture<ChapContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
