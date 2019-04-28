'use strict'

const Model = use('Model')

class Nf extends Model {
  conta () {
    return this.belongsTo('App/Model/Conta')
  }

  fornecedor () {
    return this.belongsTo('App/Model/Fornecedor')
  }
}

module.exports = Nf
