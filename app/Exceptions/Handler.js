'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {
  async handle (error, { request, response }) {
    console.log('ExceptionHandler.handle', error)

    // lançado pelo routeValidator
    if (error.name === 'ValidationException') {
      return response.status(error.status).send(error.messages)
    }

    // if (Env.get('NODE_ENV') === 'development') {
    //   const youch = new Youch(error, request.request)
    //   const errorJSON = await youch.toJSON()
    //   response.status(error.status).send(errorJSON)
    //   return
    // }

    /**
     * Erros como o da autenticação caem aqui. Caso não haja a linha abaixo,
     * não seria enviado o status de erro para o cliente
     */

    // production error
    return super.handle(...arguments)
  }

  async report (error, { request }) {
    console.log('ExceptionHandler.report', error)
  }
}

module.exports = ExceptionHandler
