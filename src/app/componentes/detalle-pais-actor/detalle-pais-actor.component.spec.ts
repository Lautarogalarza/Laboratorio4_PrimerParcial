import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePaisActorComponent } from './detalle-pais-actor.component';

describe('DetallePaisActorComponent', () => {
  let component: DetallePaisActorComponent;
  let fixture: ComponentFixture<DetallePaisActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePaisActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePaisActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
