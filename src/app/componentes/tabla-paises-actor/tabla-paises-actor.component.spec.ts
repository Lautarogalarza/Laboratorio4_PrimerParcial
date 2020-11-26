import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPaisesActorComponent } from './tabla-paises-actor.component';

describe('TablaPaisesActorComponent', () => {
  let component: TablaPaisesActorComponent;
  let fixture: ComponentFixture<TablaPaisesActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPaisesActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPaisesActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
