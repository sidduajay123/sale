import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWarmLeadComponent } from './list-warm-lead.component';

describe('ListWarmLeadComponent', () => {
  let component: ListWarmLeadComponent;
  let fixture: ComponentFixture<ListWarmLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWarmLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWarmLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
