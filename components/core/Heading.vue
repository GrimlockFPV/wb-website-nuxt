<template>
  <v-col :cols="cols">
    <h2
      :class="$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1'"
      class="font-weight-bold mb-4" 
      color="#5c4d42"
    >
      <slot />
    </h2>
  </v-col>
</template>

<script>
export default {
  props: {
    cols: {
      type: String,
      default: '12'
    }
  }
}
</script>
