import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actividad, Curso } from 'src/app/Estructura';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.css']
})
export class DetalleAlumnoComponent implements OnInit {

  indiceCurso: number;
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

  totalPonderacion: number = 65;
  totalNotaObtenida: number = 55;


  constructor(private route: ActivatedRoute, private router: Router) { 
    this.indiceCurso = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  }

}
