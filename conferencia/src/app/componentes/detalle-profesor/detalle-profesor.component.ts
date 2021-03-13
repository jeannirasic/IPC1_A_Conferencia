import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actividad, Curso, Persona } from 'src/app/Estructura';

@Component({
  selector: 'app-detalle-profesor',
  templateUrl: './detalle-profesor.component.html',
  styleUrls: ['./detalle-profesor.component.css']
})
export class DetalleProfesorComponent implements OnInit {

  indiceCurso: number;
  indiceAlumno: number;
  arregloCursos: Curso[] = [
    {
      Codigo: 770,
      Nombre: 'IPC1',
      Creditos: 4,
      Alumnos: 60,
      Profesor: 'Jeannira Sic'
    },
    {
      Codigo: 771,
      Nombre: 'IPC2',
      Creditos: 5,
      Alumnos: 50,
      Profesor: 'Jeannira Sic'
    },
    {
      Codigo: 772,
      Nombre: 'EDD',
      Creditos: 5,
      Alumnos: 70,
      Profesor: 'Jeannira Sic'
    },
    {
      Codigo: 773,
      Nombre: 'Archivos',
      Creditos: 4,
      Alumnos: 65,
      Profesor: 'Jeannira Sic'
    },
    {
      Codigo: 283,
      Nombre: 'Analisis y diseño 1',
      Creditos: 5,
      Alumnos: 50,
      Profesor: 'Jeannira Sic'
    },
    {
      Codigo: 785,
      Nombre: 'Analisis y diseño 2',
      Creditos: 5,
      Alumnos: 44,
      Profesor: 'Jeannira Sic'
    },
    {
      Codigo: 774,
      Nombre: 'Bases de datos 1',
      Creditos: 5,
      Alumnos: 55,
      Profesor: 'Jeannira Sic'
    },
    {
      Codigo: 775,
      Nombre: 'Bases de datos 2',
      Creditos: 4,
      Alumnos: 77,
      Profesor: 'Jeannira Sic'
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
  arregloActividades: Actividad[] =[
    {
      Nombre: 'Tarea 1',
      Descripcion: 'Investigación HTML',
      Ponderacion: 10,
      Promedio: 67
    },
    {
      Nombre: 'Corto 1',
      Descripcion: 'Ciencias computacionales',
      Ponderacion: 5,
      Promedio: 41
    },
    {
      Nombre: 'Proyecto',
      Descripcion: 'Sistema bancario en java',
      Ponderacion: 25,
      Promedio: 90
    },
    {
      Nombre: 'Final',
      Descripcion: 'Todo el contenido del curso',
      Ponderacion: 25,
      Promedio: 50
    }
  ];

  alumnoSeleccionado: Persona = {
    Codigo: undefined,
    Nombre: '',
    Apellido: '',
    Correo: '',
    Clave: '',
    Genero: ''
  };
  actividadNueva: Actividad = {
    Nombre: '',
    Descripcion: '',
    Ponderacion: undefined,
    Promedio: 90
  };
  constructor(private route: ActivatedRoute, private router: Router) { 
    this.indiceCurso = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  }

  // ALUMNOS-------------------------------------------------------------------------------------------------------------------
  seleccionarAlumno(persona: Persona, indice: number){
    this.alumnoSeleccionado = persona;
    this.indiceAlumno = indice;
  }

  eliminarAlumno(){
    if(this.alumnoSeleccionado.Codigo == undefined || this.alumnoSeleccionado.Nombre == "" || 
    this.alumnoSeleccionado.Apellido == "" || this.alumnoSeleccionado.Correo == "" || 
    this.alumnoSeleccionado.Clave == "" || this.alumnoSeleccionado.Genero == "" || this.indiceAlumno == undefined){
      alert("No se ha seleccionado un alumno");
    } else {
      this.arregloAlumnos.splice(this.indiceAlumno, 1);
      this.limpiarAlumno();
    }
  }

  limpiarAlumno(){
    this.indiceAlumno = undefined;
    this.alumnoSeleccionado = {
      Codigo: undefined,
      Nombre: '',
      Apellido: '',
      Correo: '',
      Clave: '',
      Genero: ''
    };
  }

  // ACTIVIDADES----------------------------------------------------------------------------------------------------------------
  crearActividad(){
    if(this.actividadNueva.Nombre == "" || this.actividadNueva.Descripcion == "" || 
    this.actividadNueva.Ponderacion == undefined ){
      alert("Todos los campos son obligatorios");
    } else {
      this.arregloActividades.push(this.actividadNueva);
      this.actividadNueva = {
        Nombre: '',
        Descripcion: '',
        Ponderacion: undefined,
        Promedio: 90
      };
    }
  }

  eliminarActividad(indice: number){
    this.arregloActividades.splice(indice, 1);
  }
}
