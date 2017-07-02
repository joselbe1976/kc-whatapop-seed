import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'app-loves',
  templateUrl: './loves.component.html',
  styleUrls: ['./loves.component.css']
})
export class LovesComponent implements OnInit {

   @Input() product: Product;

  isFavorito: boolean;

  constructor( ) { }



  ngOnInit() {

      if (localStorage.getItem(this.product.id.toString()) == null) {
        this.isFavorito = false;
        console.log('constructor NO es favorito');
      } else {
        this.isFavorito = true;
         console.log('constructor SI es favorito');
      }
  }

  execClick() {

    if (typeof(Storage) !== 'undefined') {
      console.log('WebStorage OK!');

      const favorito = localStorage.getItem(this.product.id.toString());

      if (favorito == null) {
           console.log('No esta en Favoritos, lo añado');
          this.isFavorito = true;
          localStorage.setItem(this.product.id.toString(), 'love');
      } else {
          console.log('Si esta en Favoritos, lo Elimino');
          this.isFavorito = false;
          localStorage.removeItem(this.product.id.toString());
      }
    } else {
          console.log('WebStorage no soportado por el navegador');
    }

  }
}
