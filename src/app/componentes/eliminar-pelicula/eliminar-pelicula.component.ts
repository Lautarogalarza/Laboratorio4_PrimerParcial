import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eliminar-pelicula',
  templateUrl: './eliminar-pelicula.component.html',
  styleUrls: ['./eliminar-pelicula.component.css']
})
export class EliminarPeliculaComponent implements OnInit {
  @Input() peliculaEliminar;
  constructor() { }

  ngOnInit(): void {
  }

}
