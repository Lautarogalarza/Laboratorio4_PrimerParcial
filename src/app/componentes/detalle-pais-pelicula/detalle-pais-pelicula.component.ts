import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-pais-pelicula',
  templateUrl: './detalle-pais-pelicula.component.html',
  styleUrls: ['./detalle-pais-pelicula.component.css']
})
export class DetallePaisPeliculaComponent implements OnInit {
  @Input() listaPeliculas = [];
  constructor() { }

  ngOnInit(): void {
  }

}
