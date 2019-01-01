
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapCheckoutComponent } from './chap-checkout.component';

import { FormsModule } from '@angular/forms';

describe('ChapCheckoutComponent', () => {
  let component: ChapCheckoutComponent;
  let fixture: ComponentFixture<ChapCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapCheckoutComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
