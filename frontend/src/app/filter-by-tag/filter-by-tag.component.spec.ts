import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByTagComponent } from './filter-by-tag.component';

describe('FilterByTagComponent', () => {
  let component: FilterByTagComponent;
  let fixture: ComponentFixture<FilterByTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterByTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
