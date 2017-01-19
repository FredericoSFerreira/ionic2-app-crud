import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProdutosPage } from '../pages/produtos/produtos';
import { CategoriasPage } from '../pages/categorias/categorias';
import { ModalCategoriaPage  } from '../pages/modal-categoria/modal-categoria';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProdutosPage,
    CategoriasPage,
    ModalCategoriaPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProdutosPage,
    CategoriasPage,
    ModalCategoriaPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
