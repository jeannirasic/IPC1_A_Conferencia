import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/Estructura';

@Component({
  selector: 'app-cursos-profesor',
  templateUrl: './cursos-profesor.component.html',
  styleUrls: ['./cursos-profesor.component.css']
})
export class CursosProfesorComponent implements OnInit {

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
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  verCurso(curso: Curso, indice: number){
    this.router.navigate(['/detalle-profesor', indice]);
  }
}
