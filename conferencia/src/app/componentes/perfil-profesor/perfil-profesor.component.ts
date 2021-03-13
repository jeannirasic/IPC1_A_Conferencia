import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Estructura';

@Component({
  selector: 'app-perfil-profesor',
  templateUrl: './perfil-profesor.component.html',
  styleUrls: ['./perfil-profesor.component.css']
})
export class PerfilProfesorComponent implements OnInit {

  datosProfesor: Persona = {
    Codigo: 1,
    Nombre: 'Profesor',
    Apellido: 'Prueba',
    Correo: 'profesor@gmail.com',
    Clave: 'profesor',
    Genero: 'Femenino'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

  actualizar(){
    console.log(this.datosProfesor);
    alert("Los datos se han actualizado");
  }
}
