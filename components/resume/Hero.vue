<template>
  <section id="hero">
    <v-img
      :src="require('@/assets/hero.png')"
      height="100vh"
    >
      <v-row
        :justify="$vuetify.breakpoint.mdAndUp ? 'end' : undefined"
        align="end"
        class="fill-height text-right pa-md-5 pa-3 mx-0"
      >
        <div>
          <div
            :class="`display-${$vuetify.breakpoint.mdAndUp ? '3' : '1'}`"
            class="text-uppercase"
            v-text="schema.basics.name"
          />

          <h1
            :class="`display-${$vuetify.breakpoint.mdAndUp ? '4' : '2'}`"
            class="primary--text text-uppercase"
            v-text="schema.basics.label"
          />
        </div>
      </v-row>
    </v-img>
  </section>
</template>

<script>
// Utilities
import {
  mapState
} from 'vuex'
export default {
  computed: {
    ...mapState('app', ['schema'])
  }
}

</script>

<style scoped>
#hero {
  color: #5c4d42;
}
</style>