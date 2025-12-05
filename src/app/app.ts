import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { SobreMi } from './sobre-mi/sobre-mi';
import { Proyectos } from './proyectos/proyectos';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, SobreMi, Proyectos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');
}
