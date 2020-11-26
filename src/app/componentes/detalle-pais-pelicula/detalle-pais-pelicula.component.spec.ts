import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePaisPeliculaComponent } from './detalle-pais-pelicula.component';

describe('DetallePaisPeliculaComponent', () => {
  let component: DetallePaisPeliculaComponent;
  let fixture: ComponentFixture<DetallePaisPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePaisPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePaisPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
