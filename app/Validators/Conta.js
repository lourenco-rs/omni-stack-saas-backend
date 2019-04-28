'use strict'

class Conta {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      id: 'required',
      conta: 'required',
      descricao: 'required',
      tipo: 'required'
    }
  }
}

module.exports = Conta
