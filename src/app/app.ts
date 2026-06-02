import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { AdherentList } from "./adherent-list/adherent-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, AdherentList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected readonly title = signal('mini-portail-adherents');
  
}
