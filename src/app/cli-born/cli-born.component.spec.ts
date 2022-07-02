import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliBornComponent } from './cli-born.component';

describe('CliBornComponent', () => {
  let component: CliBornComponent;
  let fixture: ComponentFixture<CliBornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliBornComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CliBornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
