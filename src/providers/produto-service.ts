import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProdutoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProdutoService {

  baseUri: string;

  constructor(public http: Http) {
    this.baseUri = 'https://api-produtos-frederico-ferreira.c9users.io/';
  }


  public findAll() {

    return new Promise((resolve, reject) => {
      this.http.get(this.baseUri + 'api/product')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        })
    });

  };


  public insert(produto) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUri + 'api/product/', JSON.stringify(produto), { headers: headers })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        })
    });

  };

  public update(produto) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    return new Promise((resolve, reject) => {
      this.http.put(this.baseUri + 'api/product/', JSON.stringify(produto), { headers: headers })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        })
    });

  };

  public delete(id) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.baseUri + 'api/product/' + id)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        })
    });

  };

}
