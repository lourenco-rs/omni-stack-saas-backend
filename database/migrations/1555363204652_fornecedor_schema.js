'use strict'

const Schema = use('Schema')

class FornecedorSchema extends Schema {
  up () {
    this.create('fornecedores', table => {
      table.increments()
      table.string('razao_social').notNullable()
      table
        .string('cpf_cnpj', 14)
        .notNullable()
        .unique()
      table
        .integer('conta_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('contas')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT')
      table.string('nome_fantasia')
      table.string('endereco', 150)
      table.integer('numero')
      table.string('bairro', 50)
      table.string('complemento', 50)
      table.string('cidade', 50)
      table.string('cep', 10)
      table.string('telefone', 20)
      table.string('email', 100)
      table.timestamps()
    })
  }

  down () {
    this.drop('fornecedores')
  }
}

module.exports = FornecedorSchema
