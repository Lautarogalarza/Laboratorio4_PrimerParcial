import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {
  @Input() paisDetalle;
  idioma;

  constructor() { }

  ngOnInit(): void {
  }
  
  
  MostrarPais(){
      
    console.log(this.paisDetalle[0].languages[0].nativeName); 
  }
 
}
