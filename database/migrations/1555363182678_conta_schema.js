'use strict'

const Schema = use('Schema')

class ContaSchema extends Schema {
  up () {
    this.create('contas', table => {
      table
        .integer('id')
        .notNullable()
        .unique()
      table.string('conta', 20).notNullable()
      table.string('descricao', 40).notNullable()
      table.string('tipo', 1).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('contas')
  }
}

module.exports = ContaSchema
