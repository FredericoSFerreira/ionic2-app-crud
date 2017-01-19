import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController  } from 'ionic-angular';
import {CategoriaService} from './../../providers/categoria-service';
import { ModalCategoriaPage  } from './../modal-categoria/modal-categoria'

@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html'
})
export class CategoriasPage {

  categorias: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private categoriaService: CategoriaService, public alert: AlertController,
    public modalCtrl: ModalController) {
    this.findAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

  public findAll() {
    this.categoriaService.findAll()
      .then((categoria: Array<any>) => {
        this.categorias = categoria;
      }, (error) => {
        console.log(error);
      })
  }

  public delete(categoria) {

    console.log('here');

    let alerta = this.alert.create({
      title: 'Deletar Categoria',
      message: 'Deseja realmente deletar a categoria\'' + categoria.nome + '\'?',
      buttons: [
        { text: 'Cacelar' },
        {
          text: 'Deletar',
          handler: data => {

            this.categoriaService.delete(categoria.id)
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

    let modal = this.modalCtrl.create(ModalCategoriaPage);

    modal.onDidDismiss(data => {
      this.findAll();
    });
    modal.present();

  }

}
