import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapSettingsComponent } from './chap-settings.component';

describe('ChapSettingsComponent', () => {
  let component: ChapSettingsComponent;
  let fixture: ComponentFixture<ChapSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
