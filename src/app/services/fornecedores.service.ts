import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  //atributo
  endpoint = environment.apiUrl + "/fornecedores";

  //injeção de dependência (@Autowired)
  constructor(private httpClient: HttpClient) { }

  //método para chamar o serviço POST (cadastro de fornecedor)
  post(fornecedor: any) {

    const formData = new FormData();

    formData.append('nome', fornecedor.nome);
    formData.append('cnpj', fornecedor.cnpj);

    return this.httpClient.post(this.endpoint, formData, { responseType: 'text' })
  }

  //método para chamar o serviço PUT (edição de fornecedor)
  put(fornecedor: any) {

    const formData = new FormData();

    formData.append('idFornecedor', fornecedor.idFornecedor);
    formData.append('nome', fornecedor.nome);

    return this.httpClient.put(this.endpoint, formData, { responseType: 'text' })
  }

  //método para chamar o serviço DELETE (exclusão de fornecedor)
  delete(idFornecedor: number) {
    return this.httpClient.delete(this.endpoint + "/" + idFornecedor, { responseType: 'text' })
  }

  //método para chamar o serviço GET (consulta de fornecedores)
  get() {
    return this.httpClient.get(this.endpoint);
  }

  //método para chamar o serviço GET por ID
  getById(idFornecedor: number) {
    return this.httpClient.get(this.endpoint + "/" + idFornecedor)
  }

}

