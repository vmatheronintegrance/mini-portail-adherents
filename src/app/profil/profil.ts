import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profil',
  imports: [ReactiveFormsModule],
  templateUrl: './profil.html',
  styleUrl: './profil.scss',
})
export class Profil {

  formBuilder = inject(FormBuilder);

  formulaire = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    nom: ['', [Validators.required, Validators.minLength(8)]]
  })


  submit($event: Event) {
    $event.preventDefault();
    console.log(this.formulaire.value)
  }

  inputInvalid(formControlName: string): boolean | undefined{
    return this.formulaire.get(formControlName)?.invalid && (this.formulaire.get(formControlName)?.dirty || this.formulaire.get(formControlName)?.touched);
  }

}
