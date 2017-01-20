import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProdutosPage } from '../pages/produtos/produtos';
import { CategoriasPage } from '../pages/categorias/categorias';
import { ModalCategoriaPage  } from '../pages/modal-categoria/modal-categoria';
import { ModalProdutoPage  } from '../pages/modal-produto/modal-produto';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProdutosPage,
    CategoriasPage,
    ModalCategoriaPage,
    ModalProdutoPage
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
    ModalCategoriaPage,
    ModalProdutoPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
