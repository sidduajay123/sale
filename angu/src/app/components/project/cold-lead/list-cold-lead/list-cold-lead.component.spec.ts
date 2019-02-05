import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListColdLeadComponent } from './list-cold-lead.component';

describe('ListColdLeadComponent', () => {
  let component: ListColdLeadComponent;
  let fixture: ComponentFixture<ListColdLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListColdLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListColdLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
