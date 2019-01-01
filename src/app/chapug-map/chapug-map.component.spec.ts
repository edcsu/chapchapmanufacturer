import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapugMapComponent } from './chapug-map.component';

describe('ChapugMapComponent', () => {
  let component: ChapugMapComponent;
  let fixture: ComponentFixture<ChapugMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapugMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapugMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
