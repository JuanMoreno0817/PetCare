import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvoluntComponent } from './formvolunt.component';

describe('FormvoluntComponent', () => {
  let component: FormvoluntComponent;
  let fixture: ComponentFixture<FormvoluntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormvoluntComponent]
    });
    fixture = TestBed.createComponent(FormvoluntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
