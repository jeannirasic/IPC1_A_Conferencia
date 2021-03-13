import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { CursosAlumnoComponent } from './componentes/cursos-alumno/cursos-alumno.component';
import { CursosProfesorComponent } from './componentes/cursos-profesor/cursos-profesor.component';
import { DetalleAlumnoComponent } from './componentes/detalle-alumno/detalle-alumno.component';
import { DetalleProfesorComponent } from './componentes/detalle-profesor/detalle-profesor.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { PerfilAlumnoComponent } from './componentes/perfil-alumno/perfil-alumno.component';
import { PerfilProfesorComponent } from './componentes/perfil-profesor/perfil-profesor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Databinding
import { FormsModule } from '@angular/forms';

// Pestanias
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CursosAlumnoComponent,
    CursosProfesorComponent,
    DetalleAlumnoComponent,
    DetalleProfesorComponent,
    InicioComponent,
    LoginComponent,
    PerfilAlumnoComponent,
    PerfilProfesorComponent
  ],
  imports: [
    MatTabsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: InicioComponent },
      { path: 'login', component: LoginComponent },
      { path: 'admin', component: AdminComponent},
      { path: 'perfil-profesor', component: PerfilProfesorComponent},
      { path: 'cursos-profesor', component: CursosProfesorComponent},
      { path: 'detalle-profesor/:id', component: DetalleProfesorComponent},
      { path: 'perfil-alumno', component: PerfilAlumnoComponent},
      { path: 'cursos-alumno', component: CursosAlumnoComponent},
      { path: 'detalle-alumno/:id', component: DetalleAlumnoComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
