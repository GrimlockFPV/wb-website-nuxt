<template>
  <v-container>
    <BlogMain />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      postList: []
    }
  },
  mounted() {
    this.getPostList()

    document.title = "Wayne's World | Blog"
  },
  methods: {
    async getPostList() {
      this.$store.commit('setIsLoading', true)

      await axios
        .get('/api/v1/blog-list/')
        .then(response => {
          this.postList = response.data
        })
        .catch(error => {
          console.log(error)
        })

      this.$store.commit('setIsLoading', false)
    }
  }
}
</script>