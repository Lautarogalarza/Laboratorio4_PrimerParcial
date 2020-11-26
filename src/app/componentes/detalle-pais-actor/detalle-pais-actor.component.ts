import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-pais-actor',
  templateUrl: './detalle-pais-actor.component.html',
  styleUrls: ['./detalle-pais-actor.component.css']
})
export class DetallePaisActorComponent implements OnInit {
  @Input() listaActores = [];
  constructor() { }

  ngOnInit(): void {
  }

}
