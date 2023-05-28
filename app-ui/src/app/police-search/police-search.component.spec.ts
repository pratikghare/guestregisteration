import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceSearchComponent } from './police-search.component';

describe('PoliceSearchComponent', () => {
  let component: PoliceSearchComponent;
  let fixture: ComponentFixture<PoliceSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliceSearchComponent]
    });
    fixture = TestBed.createComponent(PoliceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
