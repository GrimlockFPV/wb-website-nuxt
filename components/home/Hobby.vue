<template>
  <div class="mt-5 align-content-center text-center">
    <div class="mb-2">
      <v-row 
        justify="center"
        align="center"
        class="mb-8"
      >
        <v-img :src="require(`@/assets/hobbies/${value.icon}`)" 
          contain
          :alt="value.alt"
          width="100"
          height="100"
        ></v-img>
        <v-icon
          v-if="value.name==='Custom Hardware'"
          size="30"
          color="white"
          class="align-self-center"
        >
        mdi-arrow-right
      </v-icon>

        <v-img v-if="value.icon2"
          contain
          :src="require(`@/assets/hobbies/${value.icon2}`)"
          :width="value.width"
          :height="value.height"
        ></v-img>
      </v-row>
   </div>
    <CoreHobbyTitle class="mb-2 py-2">{{value.name}}</CoreHobbyTitle>
    <blockquote class="blockquote"><i><span v-html="value.quote"></span></i></blockquote>
    <cite>— {{value.source}}</cite>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({
        name: '',
        icon: '',
        icon2: '',
        height: Number,
        width: Number,
        alt: '',
        quote: '',
        source: ''
      })
    }
  }
}
</script>
