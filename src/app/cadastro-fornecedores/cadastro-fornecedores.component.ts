import { Component, OnInit } from '@angular/core';
import { FornecedoresService } from '../services/fornecedores.service';

@Component({
  selector: 'app-cadastro-fornecedores',
  templateUrl: './cadastro-fornecedores.component.html',
  styleUrls: ['./cadastro-fornecedores.component.css']
})
export class CadastroFornecedoresComponent implements OnInit {

  mensagemSucesso = '';

  mensagemErro = '';

  constructor(private fornecedoresServices : FornecedoresService) { }

  ngOnInit(): void {
  }

    cadastrarFornecedor(formCadastro: any): void {

      this.mensagemSucesso = '';
      this.mensagemErro = '';

    this.fornecedoresServices.post(formCadastro.form.value)
      .subscribe(
        (data) => {
         this.mensagemSucesso = data;

         formCadastro.form.reset();
        },
        (e) => {
          this.mensagemErro = e.error;
          
        }
      );
  }

}

