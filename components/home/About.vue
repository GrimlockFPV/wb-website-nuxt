<template>
  <CoreSection class="page-section" id="about">
    <v-container class="px-4 px-lg-5" fluid>
      <v-row justify="center">
        <v-col cols="6" class="pb-7">
          <CoreHeading class="text-center">Things That Interest Me</CoreHeading>
          <hr class="divider"/> 
        </v-col>
      </v-row>
      <v-row 
        class="d-flex align-end pt-15 mt-10"
        justify="space-around"
      >
        <v-col
          v-for="(hobby,i) in hobbies"
          :key="i"
          cols="12"                                                                                                 
          lg="3"
          md="6"
            
        >
          <HomeHobby :value="hobby" />
        </v-col>
      </v-row>
    </v-container>
  </CoreSection>
</template>

<script>
export default {
  data: () => ({
    hobbies: [
      {
        name: '3D Printing',
        icon: '3d-print.svg',
        icon2: null,
        height: null,
        width: null,
        alt: '3D Print Icon',
        quote: 'I make things<br>that make things',
        source: 'Nero3D'
      },
      {
        name: 'Embedded Design',
        icon: 'fpv-drone4.svg',
        icon2: 'fpv-head.svg',
        height: 90,
        width: 90,
        alt: 'Flying Drones',
        quote: 'No, I <u>would not</u> like<br>to film your wedding',
        source: 'Me'
      },
      {
        name: 'Custom Hardware',
        icon: 'wii2.svg',
        icon2: 'gameboy2.svg',
        height: 60,
        width: 60,
        alt: 'Making Portables',
        quote: 'I bet that Wii can be<br>turned into a GameBoy...',
        source: 'Me'
      },
      {
        name: 'SW Development',
        icon: 'coding.svg',
        icon2: null,
        height: null,
        width: null,
        alt: 'Coding',
        quote: 'Teaching myself Python and<br>Javascript sounds like a good time!',
        source: 'No one ... ever'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>

#about {
  height: 100vh;
}

</style>