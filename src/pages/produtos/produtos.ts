import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import {ProdutoService} from './../../providers/produto-service';
import { ModalProdutoPage  } from './../modal-produto/modal-produto'

@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html'
})
export class ProdutosPage {

  produtos: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private produtoService: ProdutoService, public alert: AlertController,
    public modalCtrl: ModalController) {
    this.findAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

  public findAll() {
    this.produtoService.findAll()
      .then((categoria: Array<any>) => {
        this.produtos = categoria;
      }, (error) => {
        console.log(error);
      })
  }

  public delete(produto) {

    let alerta = this.alert.create({
      title: 'Deletar Categoria',
      message: 'Deseja realmente deletar o produto\'' + produto.nome + '\'?',
      buttons: [
        { text: 'Cacelar' },
        {
          text: 'Deletar',
          handler: data => {

            this.produtoService.delete(produto.id)
              .then((res) => {
                if (res) {
                  this.findAll();
                }
              }, (error) => {
                console.log(error);
              })
          }
        }
      ]
    });

    alerta.present();

  }

  add() {

    let modal = this.modalCtrl.create(ModalProdutoPage);

    modal.onDidDismiss(data => {
      this.findAll();
    });
    modal.present();

  }

  update(produto) {

    let modal = this.modalCtrl.create(ModalProdutoPage, {
      produto: produto
    });

    modal.onDidDismiss(data => {
      this.findAll();
    });
    modal.present();

  }


}
