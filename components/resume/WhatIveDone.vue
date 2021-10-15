<template>
  <CoreSection id="what-ive-done">
    <DecorationsAbstract3 />

    <CoreHeading>What I've done</CoreHeading>

    <v-col cols="12">
      <v-carousel
        :cycle="false"
        :height="650"
        :show-arrows="false"
        class="elevation-0"
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(project, i) in projects"
          :key="i"
        >
          <ResumeProject :value="project" />
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </CoreSection>
</template>

<script>

export default {
  data: () => ({
    projects: [
      {
        name: 'Micron Optane (3D X-Point)',
        category: 'Product Management',
        src: 'optane-2.jpg'
      },
      {
        name: 'Flagship',
        category: 'Digital Design',
        src: 'flagship.jpg'
      },
      {
        name: 'Biere Craft Beer',
        category: 'Marketing and Graphic Design',
        src: 'biere.jpg'
      }
    ]
  })
}
</script>
