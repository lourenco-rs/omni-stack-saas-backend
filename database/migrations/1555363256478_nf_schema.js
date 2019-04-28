'use strict'

const Schema = use('Schema')

class NfSchema extends Schema {
  up () {
    this.create('nfs', table => {
      table.increments()
      table.date('dt_compra')
      table.date('dt_vencto')
      table
        .integer('fornecedor_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('fornecedores')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT')
      table.integer('serie')
      table.integer('numero')
      table.string('descricao')
      table.decimal('valor')
      table
        .integer('conta_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('contas')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT')
      table.timestamps()
    })
  }

  down () {
    this.drop('nfs')
  }
}

module.exports = NfSchema
