'use strict'

class Fornecedor {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      razao_social: 'required',
      cpf_cnpj: 'required',
      conta_id: 'required',
      email: 'email'
    }
  }
}

module.exports = Fornecedor
