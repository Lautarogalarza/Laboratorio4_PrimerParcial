import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-modificar-pelicula',
  templateUrl: './modificar-pelicula.component.html',
  styleUrls: ['./modificar-pelicula.component.css']
})
export class ModificarPeliculaComponent implements OnInit {
  @Input() peliculaModificar;
  peliculas: Observable<any[]>;
  listadoPelis:Pelicula[]=[];
  constructor(private context: AngularFirestore) { }

  ngOnInit(): void {
    this.peliculas = this.context.collection('peliculas').valueChanges();
    this.peliculas.subscribe(peliculas => this.listadoPelis = peliculas, error => console.log(error));

  }

  

  ModificarPelicula(){

    this.context.collection('peliculas').doc(this.peliculaModificar.id).update({
      nombre: this.peliculaModificar.nombre,
      tipo: this.peliculaModificar.data.tipo,
      cantidadDePublico: this.peliculaModificar.data.cantPublico,
      //fotoDeLaPelicula: this.peliculaModificar.data.foto,
      fechaDeEstreno: this.peliculaModificar.data.fecha,
    });


  }

}
