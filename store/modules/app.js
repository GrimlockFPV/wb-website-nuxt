const schema = require('../../schema.json')

const state = () => ({
  schema,
  initials: schema.basics.name.split(' ').map(name => name.charAt(0)).join('')
})

export default {
  namespaced: true,
  state
}
