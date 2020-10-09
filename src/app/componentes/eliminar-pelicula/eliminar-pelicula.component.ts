import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-eliminar-pelicula',
  templateUrl: './eliminar-pelicula.component.html',
  styleUrls: ['./eliminar-pelicula.component.css']
})
export class EliminarPeliculaComponent implements OnInit {
  @Input() peliculaEliminar;
  constructor(private context: AngularFireDatabase) { }

  ngOnInit(): void {
  }

  eliminar(){
    console.log(this.peliculaEliminar);
    this.peliculaEliminar.estado=false;
    this.context.list('actoresParcial').update(this.peliculaEliminar.id+this.peliculaEliminar.nombre, { estado:false})
  }
  

}
