'use strict'

const Nf = use('App/Models/Nf')

class NfController {
  async index () {
    const nfs = await Nf.all()

    return nfs
  }

  async store ({ request }) {
    const data = request.only([
      'dt_compra',
      'dt_vencto',
      'fornecedor_id',
      'serie',
      'numero',
      'descricao',
      'valor',
      'conta_id'
    ])

    const nf = await Nf.create(data)

    return nf
  }

  async show ({ params }) {
    const nf = await Nf.findOrFail(params.id)

    return nf
  }

  async update ({ params, request }) {
    const nf = await Nf.findOrFail(params.id)
    const data = request.only([
      'dt_compra',
      'dt_vencto',
      'fornecedor_id',
      'serie',
      'numero',
      'descricao',
      'valor',
      'conta_id'
    ])

    nf.merge(data)

    await nf.save()

    return nf
  }

  async destroy ({ params, request, response }) {
    const nf = await Nf.findOrFail(params.id)

    await nf.delete()
  }
}

module.exports = NfController
