import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalEventBindComponent } from './external-event-bind.component';

describe('ExternalEventBindComponent', () => {
  let component: ExternalEventBindComponent;
  let fixture: ComponentFixture<ExternalEventBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalEventBindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalEventBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
