import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { PaisesService } from '../../servicios/paises.service'
@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {
  peliculas: Observable<any[]>;
  listadoPelis = [];
  nuevaPelicula: Pelicula = new Pelicula();
  nuevoActor:Actor;
  reparto=[];
  actores: Observable<any[]>;
  listadoActores = [];
  idPelicula;
  fechaAux: Date = new Date;
  permitirUser: boolean;
  actoresNombres=[];
  error: any;
  listaPaises = [];
  nuevoPais: any;
  mensaje:any

  tipos = ["amor", "comedia", "terror", "otros"];
  constructor(private paisesService:PaisesService,private context: AngularFireDatabase,public toastr: ToastrService, private route:Router) {
    this.peliculas = this.context.list('peliculas').valueChanges();
    this.peliculas.subscribe(peliculas => {
      this.listadoPelis = peliculas;
      this.listadoPelis = this.listadoPelis.filter(p => p.estado == true);
      this.idPelicula = this.listadoPelis.length + 1;
    }, error => console.log(error));

    this.actores = this.context.list('actoresParcial').valueChanges();
    this.actores.subscribe(actores => {
      this.listadoActores = actores;
      this.listadoActores=this.listadoActores.filter(p=> p.estado ==true);
    }, error => console.log(error));


  }

  ngOnInit(): void {
    this.paisesService.getUsers().subscribe((listado: any) => {
  
      console.log('console log dentro del observable');
      this.listaPaises = listado;
    }, error => {
      console.log('Error');
    });

  }

  Cargar() {

    this.context.list('peliculas').set(this.idPelicula + this.nuevaPelicula.nombre,
      {
        nombre: this.nuevaPelicula.nombre
        , tipo: this.nuevaPelicula.tipo
        , fecha: this.getFecha()
        , cantidadPublico: this.nuevaPelicula.cantidadPublico
        , foto: "https://i.imgur.com/sMa2j5o.png"
        , estado: true
        , id: this.idPelicula
        , actor: this.reparto
        , pais: this.nuevoPais.name
      }).then(()=>{
        this.route.navigate(['/búsqueda']);
      });


  }


  actorEventDetalle(actor) {
    this.nuevoActor =actor;
    if (!this.reparto.includes(actor.id)) {
      this.mensaje='Actor registrado en el reparto';
      setTimeout(() => {
        this.mensaje=null;
      }, 1000);
      this.reparto.push(actor.id);
      this.actoresNombres.push(this.nuevoActor.nombre);
    } else {
      this.error='Actor ya seleccionado';
      setTimeout(() => {
        this.error=null;
      }, 1000);
    }
  }





  getFecha(): string {
    let fecha = new Date(this.fechaAux);
    let d, m, y;
    d = fecha.getDate() + 1;
    m = fecha.getUTCMonth() + 1;
    y = fecha.getFullYear();
    return d + "-" + m + "-" + y;
  }



  cambio(value) {
    this.nuevaPelicula.tipo = value.target.value;

    switch (value.target.value) {
      case "amor":
        this.nuevaPelicula.tipo = "amor";
        break;

      case "comedia":
        this.nuevaPelicula.tipo = "comedia";
        break;

      case "terror":
        this.nuevaPelicula.tipo = "terror";
        break;

      case "otros":
        this.nuevaPelicula.tipo = "otros";
        break;

      default:
        break;
    }

  }

  PaisEvent(pais) {

    this.nuevoPais = pais;


  }



}
