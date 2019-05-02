'use strict'

const Route = use('Route')

Route.post('sessions', 'SessionController.store').validator('Session')

Route.post('users', 'UserController.store').validator('User')

Route.post('passwords', 'ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update')

Route.group(() => {
  Route.resource('teams', 'TeamController').apiOnly()

  Route.post('files', 'FileController.store')
}).middleware('auth')

Route.group(() => {
  Route.post('invites', 'InviteController.store')

  Route.resource('projects', 'ProjectController').apiOnly()
}).middleware(['auth', 'team'])
