import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {
  @Input() actorDetalle;
  @Input() activoBoton:boolean;
  @Output() emitPeliculaDetalle:EventEmitter<any> = new EventEmitter();
  activoModificar:boolean;
  activoEliminar:boolean=true;
  constructor(private route: Router,private context: AngularFireDatabase) {

  
   }

  ngOnInit(): void {
    console.log(this.actorDetalle);
  }

  eliminar(){
    this.actorDetalle.estado=false;
    this.context.list('peliculas').update(this.actorDetalle.id+this.actorDetalle.nombre, { estado:false})
  }
  

  limpiar(){

   this.actorDetalle=[];
  }
}
