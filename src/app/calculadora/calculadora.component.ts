import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {

  }
  habilitar=true;

  numero1!:number;
  numero2!:number;
  respuesta=0;

  onOperacionSuma(){
    this.respuesta=this.numero1+this.numero2;
  }
  onOperacionResta(){
    this.respuesta=this.numero1-this.numero2;
  }
  onOperacionMultiplicacion(){
    this.respuesta=this.numero1*this.numero2;
  }
  onOperacionDivision(){
    this.respuesta=this.numero1/this.numero2;
  }

}
