import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormadoptComponent } from './formadopt.component';

describe('FormadoptComponent', () => {
  let component: FormadoptComponent;
  let fixture: ComponentFixture<FormadoptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormadoptComponent]
    });
    fixture = TestBed.createComponent(FormadoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
