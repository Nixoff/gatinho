import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  url = `http://localhost:3000/user/login`;
  constructor(private http: HttpClient) {}

  autenticar(usuario: string, senha: string): Observable<any> {
    return this.http.post(this.url, {
      userName: usuario,
      password: senha
    });
  }
}
