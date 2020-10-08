import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Actor } from 'src/app/clases/actor';
import { PaisesService } from '../../servicios/paises.service'
@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  actores: Observable<any[]>;
  listadoActores = [];
  listaPaises = [];
  nuevoPais: any;
  nuevoActor: Actor = new Actor();
  fechaAux: Date = new Date;
  tipos = ["masculino", "femenino"];
  idActor:number;
  constructor(private context: AngularFireDatabase, private paisesService: PaisesService) {


  }

  ngOnInit(): void {
    this.actores = this.context.list('actoresParcial').valueChanges();
    this.actores.subscribe(actores => {
      this.listadoActores = actores;
      this.idActor = this.listadoActores.length + 1;
    }, error => console.log(error));

  
    this.paisesService.getUsers().subscribe((listado: any) => {
  
      console.log('console log dentro del observable');
      this.listaPaises = listado;
    }, error => {
      console.log('Error');
    });

  
  
  }

  Cargar() {

    this.context.list('actoresParcial').set(this.idActor + this.nuevoActor.nombre,
      {
        nombre: this.nuevoActor.nombre
        , apellido: this.nuevoActor.apellido
        , fecha: this.getFecha()
        , sexo: this.nuevoActor.sexo
        , foto: "https://i.imgur.com/sMa2j5o.png"
        , nacionalidad: this.nuevoPais.name
        , id: this.idActor
      });


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
    this.nuevoActor.sexo = value.target.value;

    switch (value.target.value) {
      case "masculino":
        this.nuevoActor.sexo = "masculino";
        break;

      case "femenino":
        this.nuevoActor.sexo = "femenino";
        break;


      default:
        break;
    }

  }


  PaisEvent(pais) {

    this.nuevoPais = pais;


  }
}