import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrls: ['./proyectos.css'],
})
export class Proyectos {
  imagenes = ['prueba1.png', 'prueba2.jpg', 'prueba3.jpg', 'prueba4.jpg', 'prueba5.jpg'];
  index = 0;
  visible = 3;       

  get transform() {
    const shift = (this.index / this.imagenes.length) * 100 * this.imagenes.length / this.visible;
    return `translateX(-${shift}%)`;
  }

  next() {
    if (this.index < this.imagenes.length - this.visible) {
      this.index++;
    }
  }

  prev() {
    if (this.index > 0) {
      this.index--;
    }
  }
  }
