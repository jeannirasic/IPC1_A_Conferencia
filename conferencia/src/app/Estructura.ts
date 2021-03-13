export interface Persona {
    Codigo: number;
    Nombre: string;
    Apellido: string;
    Correo: string;
    Clave: string;
    Genero: string;
}
  
  export interface Curso {
    Codigo: number;
    Nombre: string;
    Creditos: number;
    Alumnos: number;
    Profesor: string;
  }

  export interface Actividad {
    Nombre: string;
    Descripcion: string;
    Ponderacion: number;
    Promedio: number;
  }