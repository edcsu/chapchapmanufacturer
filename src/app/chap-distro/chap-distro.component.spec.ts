
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapDistroComponent } from './chap-distro.component';

describe('ChapDistroComponent', () => {
  let component: ChapDistroComponent;
  let fixture: ComponentFixture<ChapDistroComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapDistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapDistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
