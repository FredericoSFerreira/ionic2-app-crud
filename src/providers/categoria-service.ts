import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriaService {

  baseUri: string;

  constructor(public http: Http) {
    this.baseUri = 'https://api-produtos-frederico-ferreira.c9users.io/';
  }


  public findAll() {

    return new Promise((resolve, reject) => {
      this.http.get(this.baseUri + 'api/category')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        })
    });

  };


  public insert(categoria) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUri + 'api/category/', JSON.stringify(categoria), { headers: headers })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        })
    });

  };

  public update(categoria) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    return new Promise((resolve, reject) => {
      this.http.put(this.baseUri + 'api/category/', JSON.stringify(categoria), { headers: headers })
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
      this.http.delete(this.baseUri + 'api/category/' + id)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        })
    });

  };


}
