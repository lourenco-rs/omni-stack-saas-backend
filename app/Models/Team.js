'use strict'

const Model = use('Model')

class Team extends Model {
  static boot () {
    super.boot()

    this.addTrait('@provider:Lucid/Slugify', {
      fields: {
        slug: 'name'
      },
      strategy: 'dbIncrement',
      disableUpdates: false
    })
  }

  users () {
    return this.belongsToMany('App/Models/Users').privotModel(
      'App/Models/UserTeam'
    )
  }
}

module.exports = Team
