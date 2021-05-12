import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asset1Component } from './asset1.component';

describe('Asset1Component', () => {
  let component: Asset1Component;
  let fixture: ComponentFixture<Asset1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Asset1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Asset1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
