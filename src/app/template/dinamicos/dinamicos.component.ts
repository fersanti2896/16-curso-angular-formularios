import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[]; 
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  persona: Persona = {
    nombre: 'Fernando',
    favoritos: [
      { id: 1, nombre: 'Mario Bross Smash' },
      { id: 2, nombre: 'Mario Party 2' }
    ]
  }

  guardar() {
    console.log('Formulario posteado')
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls.nombre?.invalid 
          && this.miFormulario?.controls.nombre?.touched
  }
}
