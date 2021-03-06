const knex = require('../knex.js')
const { USERS_TABLE_NAME } = require('../table_names.js')

module.exports = () => knex.schema.hasTable(USERS_TABLE_NAME).then(exists => {
    if (exists) return

    return knex.schema.createTableIfNotExists(USERS_TABLE_NAME, user => {
      user.string('auth0_id').primary()
      user.string('stripe_connected_account_id')
  })
})
