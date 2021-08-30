import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListautComponent } from './listaut.component';

describe('ListautComponent', () => {
  let component: ListautComponent;
  let fixture: ComponentFixture<ListautComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListautComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
