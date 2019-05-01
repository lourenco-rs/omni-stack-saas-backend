'use strict'

const Model = use('Model')

class Team extends Model {
  users () {
    return this.belongsToMany('App/Models/Users').privotModel(
      'App/Models/UserTeam'
    )
  }
}

module.exports = Team
