<template>
  <CoreSection id="what-i-know">
    <DecorationsAbstract2 />

    <v-col cols="12">
      <v-row justify="space-between">
        <CoreHeading cols="auto">
          What I know.
        </CoreHeading>

        <v-col cols="auto">
          <blockquote style="max-width: 230px;">
            <footer class="text-center">
              <v-btn color="primary">
                download cv
              </v-btn>
            </footer>
          </blockquote>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12">
      <v-row justify="space-around">
        <v-col
          id="my-education"
          cols="12"
          md="3"
          tag="section"
        >
          <h3 class="text-h4 font-weight-medium mb-4 primary--text">
            My Education
          </h3>

          <ResumeEducationCard
            v-for="(degree, i) in schema.education"
            :key="i"
            :value="degree"
          />
        </v-col>

        <v-col
          id="my-skills"
          cols="12"
          md="4"
          tag="section"
        >
          <h3 class="text-h4 font-weight-medium mb-4 primary--text">
            My Skills
          </h3>

          <ResumeSkill
            v-for="(skill, i) in schema.skills"
            :key="i"
            :value="skill"
          />
        </v-col>
      </v-row>
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
