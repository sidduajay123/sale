import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditColdLeadComponent } from './edit-cold-lead.component';

describe('EditColdLeadComponent', () => {
  let component: EditColdLeadComponent;
  let fixture: ComponentFixture<EditColdLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditColdLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditColdLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
