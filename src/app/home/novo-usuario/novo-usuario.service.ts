import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  url = `${environment.API_URL}/user`;

  constructor(private http: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    return this.http.post(`${this.url}/signup`, novoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario: string) {
    return this.http.get(`${this.url}/exists/${nomeUsuario}`);
  }

  verificaEmailUsuarioExistente(emailUsuario: string) {
    return this.http.get(`${this.url}/exists/email/${emailUsuario}`);
  }
}
