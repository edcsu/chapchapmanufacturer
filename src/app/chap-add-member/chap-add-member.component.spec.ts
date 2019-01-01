import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapAddMemberComponent } from './chap-add-member.component';

describe('ChapAddMemberComponent', () => {
  let component: ChapAddMemberComponent;
  let fixture: ComponentFixture<ChapAddMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapAddMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapAddMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
