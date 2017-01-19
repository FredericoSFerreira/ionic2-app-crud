import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {CategoriaService} from './../../providers/categoria-service';

/*
  Generated class for the ModalCategoria page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-categoria',
  templateUrl: 'modal-categoria.html',
  providers: [CategoriaService]
})
export class ModalCategoriaPage {

  categoria: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public view: ViewController, private categoriaService: CategoriaService) {

    this.categoria = navParams.get('categoria') || {};

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCategoriaPage');
  }

  close() {
    this.view.dismiss();
  }

  cadastrar() {

    if (this.categoria.id != undefined) {

      this.categoriaService.update(this.categoria)
        .then((res) => {
          if (res) {
            this.view.dismiss();
          }
        }, (error) => {
          console.log(error);
        })


    } else {

      this.categoriaService.insert(this.categoria)
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
