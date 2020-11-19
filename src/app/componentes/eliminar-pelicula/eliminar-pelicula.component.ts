import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-eliminar-pelicula',
  templateUrl: './eliminar-pelicula.component.html',
  styleUrls: ['./eliminar-pelicula.component.css']
})
export class EliminarPeliculaComponent implements OnInit {
  @Input() peliculaEliminar;
 // @Output() emitExisteUsuario:EventEmitter<any> = new EventEmitter();
  constructor(private context: AngularFireDatabase) { }

  ngOnInit(): void {
  }

  eliminar(){
    console.log(this.peliculaEliminar);
  //  this.emitExisteUsuario.emit(false);
  this.peliculaEliminar.estado=false;
  this.context.list('actoresParcial').update(this.peliculaEliminar.id.toString(), { estado:false})
  }
  

}
