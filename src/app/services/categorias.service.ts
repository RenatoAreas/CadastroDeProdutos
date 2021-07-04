import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  endpoint = environment.apiUrl + "/categorias";

  constructor( private httpClient : HttpClient) { }

  get(){
    return this.httpClient.get(this.endpoint);
  }
}
