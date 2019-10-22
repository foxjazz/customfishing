import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprowviewComponent } from './sprowview.component';

describe('SprowviewComponent', () => {
  let component: SprowviewComponent;
  let fixture: ComponentFixture<SprowviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprowviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprowviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
