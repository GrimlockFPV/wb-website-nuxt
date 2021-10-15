const state = () => ({
    blog: {
        posts: []
    },
    isLoading: false
})
  
  
const mutations = () => ({
    setIsLoading(state, status) {
        state.isLoading = status
    }
})

const actions = () => ({
    async getCategoryList() {
        let res = await this.$axios.get('/categories')
        return res;
    }
})

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
      