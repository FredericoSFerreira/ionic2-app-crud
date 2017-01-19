import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the ModalCategoria page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-categoria',
  templateUrl: 'modal-categoria.html'
})
export class ModalCategoriaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCategoriaPage');
  }

  close() {
    this.view.dismiss();
  }

}
