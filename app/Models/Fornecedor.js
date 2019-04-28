'use strict'

const Model = use('Model')

class Fornecedor extends Model {
  conta () {
    return this.belongsTo('App/Model/Conta')
  }

  notas () {
    return this.hasMany('App/Model/Nf')
  }

  static get table () {
    return 'fornecedores'
  }
}

module.exports = Fornecedor
