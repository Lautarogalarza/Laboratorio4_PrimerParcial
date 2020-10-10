import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePeliculaActorComponent } from './detalle-pelicula-actor.component';

describe('DetallePeliculaActorComponent', () => {
  let component: DetallePeliculaActorComponent;
  let fixture: ComponentFixture<DetallePeliculaActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePeliculaActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePeliculaActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
