'use strict'

const Fornecedor = use('App/Models/Fornecedor')

class FornecedorController {
  async index () {
    const fornecedor = await Fornecedor.all()

    return fornecedor
  }

  async store ({ request }) {
    const data = request.only([
      'razao_social',
      'cpf_cnpj',
      'conta_id',
      'nome_fantasia',
      'endereco',
      'numero',
      'bairro',
      'complemento',
      'cidade',
      'cep',
      'telefone',
      'email'
    ])

    const fornecedor = await Fornecedor.create(data)

    return fornecedor
  }

  async show ({ params }) {
    const fornecedor = await Fornecedor.findOrFail(params.id)

    return fornecedor
  }

  async update ({ params, request }) {
    const fornecedor = await Fornecedor.findOrFail(params.id)
    const data = request.only([
      'razao_social',
      'cpf_cnpj',
      'conta_id',
      'nome_fantasia',
      'endereco',
      'numero',
      'bairro',
      'complemento',
      'cidade',
      'cep',
      'telefone',
      'email'
    ])

    fornecedor.merge(data)

    await fornecedor.save()

    return fornecedor
  }

  async destroy ({ params }) {
    const fornecedor = await Fornecedor.findOrFail(params.id)

    await fornecedor.delete()
  }
}

module.exports = FornecedorController
