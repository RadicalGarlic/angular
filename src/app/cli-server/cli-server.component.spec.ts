import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliServerComponent } from './cli-server.component';

describe('CliServerComponent', () => {
  let component: CliServerComponent;
  let fixture: ComponentFixture<CliServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CliServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
