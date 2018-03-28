import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentdetailsComponent } from './contentdetails.component';

describe('ContentdetailsComponent', () => {
  let component: ContentdetailsComponent;
  let fixture: ComponentFixture<ContentdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
