import { Env } from './../../../Environment/environment';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private httpClient : HttpClient = inject(HttpClient);

  constructor() { }

  getAllProducts(): Observable<any>
  {
    return this.httpClient.get(`${Env.baseURL}/products`);
  }

  getSpecificProduct(productId : string): Observable<any>
  {
    return this.httpClient.get(`${Env.baseURL}/products/${productId}`);
  }
}
