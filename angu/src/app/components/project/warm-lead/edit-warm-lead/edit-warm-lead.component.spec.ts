import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWarmLeadComponent } from './edit-warm-lead.component';

describe('EditWarmLeadComponent', () => {
  let component: EditWarmLeadComponent;
  let fixture: ComponentFixture<EditWarmLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWarmLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWarmLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
