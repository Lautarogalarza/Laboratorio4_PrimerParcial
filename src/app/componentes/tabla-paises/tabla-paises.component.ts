import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Input() listadoPaises=[];
  @Input() activoBoton:boolean;
  @Output() emitPais:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  
  EnviarPais(pais)
  {
  
    this.emitPais.emit(pais)
  }


}
