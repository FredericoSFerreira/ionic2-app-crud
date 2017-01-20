import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {ProdutoService} from './../../providers/produto-service';
import {CategoriaService} from './../../providers/categoria-service';

@Component({
  selector: 'page-modal-produto',
  templateUrl: 'modal-produto.html',
  providers: [ProdutoService, CategoriaService]
})
export class ModalProdutoPage {

  produto: any;
  categorias: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public view: ViewController, private produtoService: ProdutoService,
    private categoriaService: CategoriaService) {

    this.produto = navParams.get('produto') || {};
    this.categoriaService.findAll()
      .then((categoria: Array<any>) => {
        this.categorias = categoria;
      }, (error) => {
        this.categorias = [];
        console.log("Erro ao buscar categorias");

      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalProdutoPage');
  }

  close() {
    this.view.dismiss();
  }

  cadastrar() {

    if (this.produto.id != undefined) {

      this.produtoService.update(this.produto)
        .then((res) => {
          if (res) {
            this.view.dismiss();
          }
        }, (error) => {
          console.log(error);
        })

    } else {

      this.produtoService.insert(this.produto)
        .then((res) => {
          if (res) {
            this.view.dismiss();
          }
        }, (error) => {
          console.log(error);
        })
    }
  }

}
