import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Estructura';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.css']
})
export class PerfilAlumnoComponent implements OnInit {

  datosAlumno: Persona = {
    Codigo: 1,
    Nombre: 'Alumno',
    Apellido: 'Prueba',
    Correo: 'alumno@gmail.com',
    Clave: 'alumno',
    Genero: 'Femenino'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

  actualizar(){
    console.log(this.datosAlumno);
    alert("Los datos se han actualizado");
  }
}
