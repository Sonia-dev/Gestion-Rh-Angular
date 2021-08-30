import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowautComponent } from './showaut.component';

describe('ShowautComponent', () => {
  let component: ShowautComponent;
  let fixture: ComponentFixture<ShowautComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowautComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
