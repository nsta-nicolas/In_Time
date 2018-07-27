import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriedetailComponent } from './seriedetail.component';

describe('SeriedetailComponent', () => {
  let component: SeriedetailComponent;
  let fixture: ComponentFixture<SeriedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
