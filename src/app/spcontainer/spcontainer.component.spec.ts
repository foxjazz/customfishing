import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpcontainerComponent } from './spcontainer.component';

describe('SpcontainerComponent', () => {
  let component: SpcontainerComponent;
  let fixture: ComponentFixture<SpcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
