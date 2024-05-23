import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenfComponent } from './pagenf.component';

describe('PagenfComponent', () => {
  let component: PagenfComponent;
  let fixture: ComponentFixture<PagenfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagenfComponent]
    });
    fixture = TestBed.createComponent(PagenfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
