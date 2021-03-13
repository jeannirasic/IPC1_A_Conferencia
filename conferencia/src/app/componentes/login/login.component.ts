import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string;
  clave: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  ingresar(){
    if(this.usuario == "admin" && this.clave == "123"){
      this.router.navigate(['/admin']);
    }else if(this.usuario == "profesor" && this.clave == "123"){
      this.router.navigate(['/perfil-profesor']);
    }else if(this.usuario == "alumno" && this.clave == "123"){
      this.router.navigate(['/perfil-alumno']);
    }else{
      alert("El usuario y la clave ingresada no es valida");
      this.usuario = "";
      this.clave = "";
    }
  }
}
