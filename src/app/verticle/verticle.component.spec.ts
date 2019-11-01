import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticleComponent } from './verticle.component';

describe('VerticleComponent', () => {
  let component: VerticleComponent;
  let fixture: ComponentFixture<VerticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
