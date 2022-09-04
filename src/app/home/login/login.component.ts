import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(private authService: AutenticacaoService) {}

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe((res) => {
      console.log('Autenticado com sucesso ;)');
      console.log(res.email);
    }, (error) => {
      alert('Usuário ou senha inválido')
      console.log(error);
    })
  }

  ngOnInit(): void {}
}
