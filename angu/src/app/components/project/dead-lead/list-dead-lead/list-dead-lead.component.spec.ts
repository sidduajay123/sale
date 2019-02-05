import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeadLeadComponent } from './list-dead-lead.component';

describe('ListDeadLeadComponent', () => {
  let component: ListDeadLeadComponent;
  let fixture: ComponentFixture<ListDeadLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDeadLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeadLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
