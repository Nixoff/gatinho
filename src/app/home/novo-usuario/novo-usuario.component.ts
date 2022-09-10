import { Router } from '@angular/router';
import { UsuarioExisteService } from './usuario-existe.service';
import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { minusculoValidator } from './minusculo.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExistenteService: UsuarioExisteService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email],
        [this.usuarioExistenteService.emailUsuarioExistente()],
      ],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: [
        '',
        [Validators.required, minusculoValidator],
        [this.usuarioExistenteService.usuarioExistente()],
      ],
      password: ['', [Validators.required]],
    });
  }

  cadastrar() {
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(() => {
      this.router.navigate(['']);
    },
    (error) => {
      console.log(error);
      
    })
  }
}
