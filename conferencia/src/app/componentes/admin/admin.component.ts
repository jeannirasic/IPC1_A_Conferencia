import { Component, OnInit } from '@angular/core';
import { Curso, Persona } from 'src/app/Estructura';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  arregloProfesores: Persona[] = [
    {
      Codigo: 1,
      Nombre: 'Juan',
      Apellido: 'Pérez',
      Correo: 'juan@gmail.com',
      Clave: 'profesor',
      Genero: 'Masculino'
    },
    {
      Codigo: 2,
      Nombre: 'Maria',
      Apellido: 'López',
      Correo: 'maria@gmail.com',
      Clave: 'profesor',
      Genero: 'Femenino'
    },
    {
      Codigo: 3,
      Nombre: 'Jorge',
      Apellido: 'Martínez',
      Correo: 'jorge@gmail.com',
      Clave: 'profesor',
      Genero: 'Masculino'
    },
    {
      Codigo: 4,
      Nombre: 'Sara',
      Apellido: 'Fuentes',
      Correo: 'sara@gmail.com',
      Clave: 'profesor',
      Genero: 'Femenino'
    }
  ];
  arregloCursos: Curso[] = [
    {
      Codigo: 1,
      Nombre: 'IPC1',
      Creditos: 5,
      Alumnos: 70,
      Profesor: 'Juan Pérez'
    },
    {
      Codigo: 2,
      Nombre: 'IPC2',
      Creditos: 5,
      Alumnos: 60,
      Profesor: 'María López'
    },
    {
      Codigo: 3,
      Nombre: 'EDD',
      Creditos: 4,
      Alumnos: 75,
      Profesor: 'Jorge Martínez'
    },
    {
      Codigo: 4,
      Nombre: 'Archivos',
      Creditos: 5,
      Alumnos: 80,
      Profesor: 'Sara Fuentes'
    }
  ];
  arregloAlumnos: Persona[] = [
    {
      Codigo: 1,
      Nombre: 'Juan',
      Apellido: 'Pérez',
      Correo: 'juan@gmail.com',
      Clave: 'alumno',
      Genero: 'Masculino'
    },
    {
      Codigo: 2,
      Nombre: 'Maria',
      Apellido: 'López',
      Correo: 'maria@gmail.com',
      Clave: 'alumno',
      Genero: 'Femenino'
    },
    {
      Codigo: 3,
      Nombre: 'Jorge',
      Apellido: 'Martínez',
      Correo: 'jorge@gmail.com',
      Clave: 'alumno',
      Genero: 'Masculino'
    },
    {
      Codigo: 4,
      Nombre: 'Sara',
      Apellido: 'Fuentes',
      Correo: 'sara@gmail.com',
      Clave: 'alumno',
      Genero: 'Femenino'
    }
  ];

  profesorSeleccionado: Persona = {
    Codigo: undefined,
    Nombre: '',
    Apellido: '',
    Correo: '',
    Clave: '',
    Genero: ''
  };
  cursoSeleccionado: Curso = {
    Codigo: undefined,
    Nombre: '',
    Creditos: undefined,
    Alumnos: undefined,
    Profesor: ''
  };
  alumnoSeleccionado: Persona = {
    Codigo: undefined,
    Nombre: '',
    Apellido: '',
    Correo: '',
    Clave: '',
    Genero: ''
  };

  indice: number;

  constructor() { }

  ngOnInit(): void {
  }

  // METODOS PROFESOR--------------------------------------------------------------------------------------------------------
  seleccionarProfesor(persona: Persona, indice: number){
    this.profesorSeleccionado = persona;
    this.indice = indice;
  }

  crearProfesor(){
    if(this.profesorSeleccionado.Codigo == undefined || this.profesorSeleccionado.Nombre == "" || 
    this.profesorSeleccionado.Apellido == "" || this.profesorSeleccionado.Correo == "" || 
    this.profesorSeleccionado.Clave == "" || this.profesorSeleccionado.Genero == ""){
      alert("Se deben ingresar todos los campos");
    } else {
      this.arregloProfesores.push(this.profesorSeleccionado);
      this.limpiarProfesor();
    }
  }

  actualizarProfesor(){
    if(this.profesorSeleccionado.Codigo == undefined || this.profesorSeleccionado.Nombre == "" || 
    this.profesorSeleccionado.Apellido == "" || this.profesorSeleccionado.Correo == "" || 
    this.profesorSeleccionado.Clave == "" || this.profesorSeleccionado.Genero == "" || this.indice == undefined){
      alert("Se deben ingresar todos los campos");
    } else {
      this.arregloProfesores[this.indice] = this.profesorSeleccionado;
      this.limpiarProfesor();
    }
  }

  eliminarProfesor(){
    if(this.profesorSeleccionado.Codigo == undefined || this.profesorSeleccionado.Nombre == "" || 
    this.profesorSeleccionado.Apellido == "" || this.profesorSeleccionado.Correo == "" || 
    this.profesorSeleccionado.Clave == "" || this.profesorSeleccionado.Genero == "" || this.indice == undefined){
      alert("No se ha seleccionado un profesor");
    } else {
      this.arregloProfesores.splice(this.indice, 1);
      this.limpiarProfesor();
    }
  }

  limpiarProfesor(){
    this.indice = undefined;
    this.profesorSeleccionado = {
      Codigo: undefined,
      Nombre: '',
      Apellido: '',
      Correo: '',
      Clave: '',
      Genero: ''
    };
  }

  // METODOS CURSO-----------------------------------------------------------------------------------------------------------
  seleccionarCurso(curso: Curso, indice: number){
    this.cursoSeleccionado = curso;
    this.indice = indice;
  }

  crearCurso(){
    if(this.cursoSeleccionado.Codigo == undefined || this.cursoSeleccionado.Nombre == "" || 
    this.cursoSeleccionado.Creditos == undefined || this.cursoSeleccionado.Alumnos == undefined || 
    this.cursoSeleccionado.Profesor == "" ){
      alert("Se deben ingresar todos los campos");
    } else {
      this.arregloCursos.push(this.cursoSeleccionado);
      this.limpiarCurso();
    }
  }

  actualizarCurso(){
    if(this.cursoSeleccionado.Codigo == undefined || this.cursoSeleccionado.Nombre == "" || 
      this.cursoSeleccionado.Creditos == undefined || this.cursoSeleccionado.Alumnos == undefined || 
      this.cursoSeleccionado.Profesor == ""  || this.indice == undefined){
      alert("Se deben ingresar todos los campos");
    } else {
      this.arregloCursos[this.indice] = this.cursoSeleccionado;
      this.limpiarCurso();
    }
  }

  eliminarCurso(){
    if(this.cursoSeleccionado.Codigo == undefined || this.cursoSeleccionado.Nombre == "" || 
      this.cursoSeleccionado.Creditos == undefined || this.cursoSeleccionado.Alumnos == undefined || 
      this.cursoSeleccionado.Profesor == ""  || this.indice == undefined){
      alert("No se ha seleccionado un curso");
    } else {
      this.arregloCursos.splice(this.indice, 1);
      this.limpiarCurso();
    }
  }

  limpiarCurso(){
    this.indice = undefined;
    this.cursoSeleccionado = {
      Codigo: undefined,
      Nombre: '',
      Creditos: undefined,
      Alumnos: undefined,
      Profesor: ''
    };
  }

  // METODOS ALUMNO----------------------------------------------------------------------------------------------------------
  seleccionarAlumno(alumno: Persona, indice: number){
    this.alumnoSeleccionado = alumno;
    this.indice = indice;
  }

  crearAlumno(){
    if(this.alumnoSeleccionado.Codigo == undefined || this.alumnoSeleccionado.Nombre == "" || 
    this.alumnoSeleccionado.Apellido == "" || this.alumnoSeleccionado.Correo == "" || 
    this.alumnoSeleccionado.Clave == "" || this.alumnoSeleccionado.Genero == ""){
      alert("Se deben ingresar todos los campos");
    } else {
      this.arregloAlumnos.push(this.alumnoSeleccionado);
      this.limpiarAlumno();
    }
  }

  actualizarAlumno(){
    if(this.alumnoSeleccionado.Codigo == undefined || this.alumnoSeleccionado.Nombre == "" || 
    this.alumnoSeleccionado.Apellido == "" || this.alumnoSeleccionado.Correo == "" || 
    this.alumnoSeleccionado.Clave == "" || this.alumnoSeleccionado.Genero == "" || this.indice == undefined){
      alert("Se deben ingresar todos los campos");
    } else {
      this.arregloAlumnos[this.indice] = this.alumnoSeleccionado;
      this.limpiarAlumno();
    }
  }

  eliminarAlumno(){
    if(this.alumnoSeleccionado.Codigo == undefined || this.alumnoSeleccionado.Nombre == "" || 
    this.alumnoSeleccionado.Apellido == "" || this.alumnoSeleccionado.Correo == "" || 
    this.alumnoSeleccionado.Clave == "" || this.alumnoSeleccionado.Genero == "" || this.indice == undefined){
      alert("No se ha seleccionado un alumno");
    } else {
      this.arregloAlumnos.splice(this.indice, 1);
      this.limpiarAlumno();
    }
  }

  limpiarAlumno(){
    this.indice = undefined;
    this.alumnoSeleccionado = {
      Codigo: undefined,
      Nombre: '',
      Apellido: '',
      Correo: '',
      Clave: '',
      Genero: ''
    };
  }

}
