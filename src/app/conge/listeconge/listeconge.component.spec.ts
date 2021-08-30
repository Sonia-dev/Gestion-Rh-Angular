import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecongeComponent } from './listeconge.component';

describe('ListecongeComponent', () => {
  let component: ListecongeComponent;
  let fixture: ComponentFixture<ListecongeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListecongeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
