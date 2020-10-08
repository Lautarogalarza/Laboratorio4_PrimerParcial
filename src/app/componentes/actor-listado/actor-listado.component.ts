import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {
  actores: Observable<any[]>;
  listadoActores = [];
  constructor(private context: AngularFireDatabase) { }

  ngOnInit(): void {
    this.actores = this.context.list('actores').valueChanges();
    this.actores.subscribe(actores => this.listadoActores = actores, error => console.log(error));
  }

  cargarActor() {
    this.context.list('actores').set(1 + "Christian" + "Bale", { nombre: "Christian", apellido: "Bale", fecha: "30-01-1974", sexo: "Masculino", foto: "https://i.imgur.com/xpJEToQ.jpeg", id: 1 });
    this.context.list('actores').set(2 + "Anne" + "Hathaway", { nombre: "Anne", apellido: "Hattaway", fecha: "15-06-1982", sexo: "Femenino", foto: "https://i.imgur.com/Sa9XS9g.jpeg", id: 2 });
    this.context.list('actores').set(3 + "Renée" + "Zellweger", { nombre: "Renée", apellido: "Zellweger", fecha: "12-08-1974", sexo: "Femenino", foto: "https://i.imgur.com/ZxtLGMd.jpeg", id: 3 });
    this.context.list('actores').set(4 + "Bruce" + "Campbell", { nombre: "Bruce", apellido: "Campbell", fecha: "22-05-1970", sexo: "Masculino", foto: "https://i.imgur.com/SyOetpM.jpeg", id: 4 });
    this.context.list('actores').set(5 + "Keanu" + "Reeves", { nombre: "Keanu", apellido: "Reeves", fecha: "02-10-1975", sexo: "Masculino", foto: "https://i.imgur.com/SBIBBkI.jpeg", id: 5 });

  }
}