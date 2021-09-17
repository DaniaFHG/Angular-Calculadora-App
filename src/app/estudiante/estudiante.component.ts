import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  nombre = "Dania Fernanda Hernández Gómez";
  carnet = "0907-18-12220";
  docente = "Ing. Carlos Hernández";

  constructor() { }
  ngOnInit(): void {
  }

}
