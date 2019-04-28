'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store').validator('Session')
Route.post('passwords', 'ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update')

Route.group(() => {
  Route.resource('contas', 'ContaController')
    .apiOnly()
    .validator(new Map([[['contas.store', 'contas.update'], ['Conta']]]))
  Route.resource('fornecedores', 'FornecedorController')
    .apiOnly()
    .validator(
      new Map([[['fornecedores.store', 'fornecedores.update'], ['Fornecedor']]])
    )
  Route.resource('nfs', 'NfController')
    .apiOnly()
    .validator(new Map([[['nfs.store', 'nfs.update'], ['Nf']]]))

  Route.post('files', 'FileController.store')
}).middleware('auth')
