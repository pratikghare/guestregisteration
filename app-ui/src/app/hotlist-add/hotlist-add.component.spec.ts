import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotlistAddComponent } from './hotlist-add.component';

describe('HotlistAddComponent', () => {
  let component: HotlistAddComponent;
  let fixture: ComponentFixture<HotlistAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotlistAddComponent]
    });
    fixture = TestBed.createComponent(HotlistAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
