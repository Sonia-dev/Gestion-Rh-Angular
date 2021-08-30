import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcongeComponent } from './showconge.component';

describe('ShowcongeComponent', () => {
  let component: ShowcongeComponent;
  let fixture: ComponentFixture<ShowcongeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcongeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
