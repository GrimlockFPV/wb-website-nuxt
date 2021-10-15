<template>
    <section id="blog-page-one">
        <header class="blog-header py-3">
            <div class="text-center">
                    <h1 class="blog-header-logo text-dark">Wayne's Word Vomit</h1>
            </div>
        </header>
            <v-row
                justify="space-between"
                align="end"
            >
                <div class="text-uppercase button" v-for="(category, i) in categoryList" :key="i">
                    {{category.name}}
                </div>
            </v-row>
    </section>
</template>

<script>
// Utilities
import axios from 'axios'

export default {
  data() {
    return {
      categoryList: []
    }
  },
  mounted() {
    this.getCategoryList()
    document.title = "Wayne's World | Blog"
  },
  methods: {
    async getCategoryList() {
        let res = await this.$store.blog.dispatch("getCategoryList");
        this.categoryList = res.data.data.categoryList;
    }
  }
}
