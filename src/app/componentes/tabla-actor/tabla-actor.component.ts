import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from './../../clases/actor';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: '../tabla-actor/tabla-actor.component.html',
  styleUrls: ['../tabla-actor/tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {
  @Input() listadoActores=[];
  @Input() activoBoton:boolean;
  @Output() emitActorDetalle:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  
  EnviarActor(actor:Actor)
  {
  
    this.emitActorDetalle.emit(actor)
  }

}
