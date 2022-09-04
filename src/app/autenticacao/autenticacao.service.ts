import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  url = `${environment.API_URL}/user/login`;

  constructor(private http: HttpClient) {}

  autenticar(usuario: string, senha: string): Observable<any> {
    return this.http.post(this.url, {
      userName: usuario,
      password: senha
    });
  }
}
