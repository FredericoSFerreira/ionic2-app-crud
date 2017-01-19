import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { CategoriasPage } from './../categorias/categorias';

import { ProdutosPage } from './../produtos/produtos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController) {
    this.tab1 = ProdutosPage;
    this.tab2 = CategoriasPage;
  }

}
