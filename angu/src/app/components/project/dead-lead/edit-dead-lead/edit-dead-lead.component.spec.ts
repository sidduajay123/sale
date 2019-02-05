import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeadLeadComponent } from './edit-dead-lead.component';

describe('EditDeadLeadComponent', () => {
  let component: EditDeadLeadComponent;
  let fixture: ComponentFixture<EditDeadLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeadLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeadLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
