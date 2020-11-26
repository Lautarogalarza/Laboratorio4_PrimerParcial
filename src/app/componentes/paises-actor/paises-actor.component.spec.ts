import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesActorComponent } from './paises-actor.component';

describe('PaisesActorComponent', () => {
  let component: PaisesActorComponent;
  let fixture: ComponentFixture<PaisesActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
