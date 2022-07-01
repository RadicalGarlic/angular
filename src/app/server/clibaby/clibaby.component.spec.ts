import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClibabyComponent } from './clibaby.component';

describe('ClibabyComponent', () => {
  let component: ClibabyComponent;
  let fixture: ComponentFixture<ClibabyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClibabyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClibabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
