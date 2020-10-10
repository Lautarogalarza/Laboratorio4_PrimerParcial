import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-pelicula-actor',
  templateUrl: './detalle-pelicula-actor.component.html',
  styleUrls: ['./detalle-pelicula-actor.component.css']
})
export class DetallePeliculaActorComponent implements OnInit {
  @Input() listaPeliculas = [];
   activoTabla:boolean=true;
  constructor() {

   }

  ngOnInit(): void {

  }

}
