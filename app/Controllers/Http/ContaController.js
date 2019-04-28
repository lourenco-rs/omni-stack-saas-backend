'use strict'

const Conta = use('App/Models/Conta')

class ContaController {
  async index () {
    const contas = await Conta.all()

    return contas
  }

  async store ({ request }) {
    const data = request.only(['id', 'conta', 'descricao', 'tipo'])

    const conta = await Conta.create(data)

    return conta
  }

  async show ({ params }) {
    const conta = await Conta.findOrFail(params.id)

    return conta
  }

  async update ({ params, request }) {
    const conta = await Conta.findOrFail(params.id)
    const data = request.only(['id', 'conta', 'descricao', 'tipo'])

    conta.merge(data)

    await conta.save()

    return conta
  }

  async destroy ({ params }) {
    const conta = await Conta.findOrFail(params.id)

    await conta.delete()
  }
}

module.exports = ContaController
