import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';
import { switchMap, map, first, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuarioExisteService {
  constructor(private novoUsuarioService: NovoUsuarioService) {}

  usuarioExistente() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        delay(800),
        switchMap((nomeUsuario) =>
        this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)
        ),
        map((usuarioExistente) =>
        usuarioExistente ? { usuarioExistente: true } : null
        ),
        first()
      );
    };
  }

  emailUsuarioExistente() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        delay(800),
        switchMap((emailUsuario) =>
        this.novoUsuarioService.verificaEmailUsuarioExistente(emailUsuario)
        ),
        map((emailUsuarioExistente) =>
        emailUsuarioExistente ? { emailUsuarioExistente: true } : null
        ),
        first()
      );
    };
  }
}
