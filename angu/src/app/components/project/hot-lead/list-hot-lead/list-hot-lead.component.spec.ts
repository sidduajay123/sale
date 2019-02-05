import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHotLeadComponent } from './list-hot-lead.component';

describe('ListHotLeadComponent', () => {
  let component: ListHotLeadComponent;
  let fixture: ComponentFixture<ListHotLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHotLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHotLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
