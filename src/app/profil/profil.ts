import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profil',
  imports: [ReactiveFormsModule],
  templateUrl: './profil.html',
  styleUrl: './profil.scss',
})
export class Profil {
  
  email = new FormControl<string>('', [Validators.required]);
  
  submit($event: Event) {
    $event.preventDefault();
    console.log(this.email.value);
  }


}
