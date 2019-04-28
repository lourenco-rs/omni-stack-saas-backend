'use strict'

class Nf {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      fornecedor_id: 'required',
      conta_id: 'required'
    }
  }
}

module.exports = Nf
