<template>
  <CoreSection id="who-i-am">
    <DecorationsAbstract1 />

    <CoreHeading>Who I am.</CoreHeading>

    <v-col
      cols="12"
      md="7"
    >
      <v-row justify="space-between">
        <v-col
          cols="12"
          md="7"
        >
          <CoreText class="mb-0">
            <p v-text="schema.basics.summary" />
            <div>
              <v-img
                :src="require('@/assets/signature.png')"
                class="ml-auto"
                width="150"
              />
            </div>
          </CoreText>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-row align="center">
            <v-col
              cols="6"
              class="text-uppercase primary--text font-weight-medium"
            >
              <div
                class="mb-3"
                v-text="'Location'"
              />
              <div
                class="mb-3"
                v-text="'Email'"
              />
              <div
                class="mb-3"
                v-text="'Phone'"
              />
              <div v-text="'Discord'" />
            </v-col>
            <v-col
              cols="6"
              class="subheading text-no-wrap"
            >
              <div
                class="mb-3"
                v-text="'United States'"
              />
              <div
                class="mb-3 text-truncate"
                v-text="schema.basics.email"
              />
              <div
                class="mb-3"
                v-text="schema.basics.phone"
              />
              <div>@GrimlockFPV#6271</div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>

    <v-col
      class="hidden-sm-and-down text-right text-uppercase"
      cols="5"
    >
      <div
        class="text-h3"
        v-text="schema.basics.label"
      />

      <span
        class="primary--text text-h4 font-weight-light"
        v-text="schema.basics.name"
      />

      <v-img
        :src="require('@/assets/john.png')"
        contain
        height="900"
        style="right: 0; position: absolute; top: 300px;"
      />
    </v-col>
  </CoreSection>
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

<style lang="sass">
  .v-expansion-panels > li
    border-top: 1px solid rgba(#fff, .12) !important
</style>
