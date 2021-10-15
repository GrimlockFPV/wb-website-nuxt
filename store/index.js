import Vuex from 'vuex'
import app from '@/store/modules/app'
import blog from '@/store/modules/blog'

const createStore = () => {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
      app,
      blog
    }
  })
}

export default createStore
