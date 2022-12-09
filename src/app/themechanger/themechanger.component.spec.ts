import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemechangerComponent } from './themechanger.component';

describe('ThemechangerComponent', () => {
  let component: ThemechangerComponent;
  let fixture: ComponentFixture<ThemechangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemechangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemechangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
