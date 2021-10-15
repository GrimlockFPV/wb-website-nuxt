<template>
  <v-row
    tag="section"
    class="pa-5 mx-0 text-brown"
    v-bind="$attrs"
    style="position: relative;"
  >
    <slot />
  </v-row>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>
