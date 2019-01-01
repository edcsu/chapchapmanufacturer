
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ChapNavComponent } from './chap-nav.component';

describe('ChapNavComponent', () => {
  let component: ChapNavComponent;
  let fixture: ComponentFixture<ChapNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [ChapNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
