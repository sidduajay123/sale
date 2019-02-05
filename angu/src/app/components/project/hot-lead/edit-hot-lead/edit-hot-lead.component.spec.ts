import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHotLeadComponent } from './edit-hot-lead.component';

describe('EditHotLeadComponent', () => {
  let component: EditHotLeadComponent;
  let fixture: ComponentFixture<EditHotLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHotLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHotLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
