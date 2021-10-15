<template>
  <div>
    <ResumeHero />

    <v-container
      class="py-5 px-0"
      fluid
    >
      <ResumeWhoIAm />

      <ResumeWhatICanDoForYou />

      <ResumeWhereIveBeen />

      <ResumeWhatIKnow />

      <ResumeWhatIveDone />

      <ResumeWhatMyClientsSay />

      <ResumeLetsTalk />
    </v-container>
  </div>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$i18n.t('Home.title')
    }
  },
  data: () => ({
    //
  })
}
</script>
