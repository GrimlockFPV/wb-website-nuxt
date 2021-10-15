<template>
  <CoreSection id="lets-talk">
    <CoreHeading>Let's talk.</CoreHeading>

    <v-col
      cols="12"
      md="5"
      class="mb-4 pr-md-5"
    >
      <CoreSubheading class="text-uppercase">
        What can I do for you?
      </CoreSubheading>

      <CoreText class="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce vel est interdum, pharetra magna ac, facilisis ante.
        Fusce eu finibus magna. Sest interdum, pharetra magna ac, facilisis ante.
        Fusce eu finibus magna.
      </CoreText>

      <CoreSubheading class="text-uppercase mb-3">
        Send me a Message
      </CoreSubheading>

      <v-form>
        <v-text-field
          solo-inverted
          flat
          label="Name"
        />

        <v-text-field
          solo-inverted
          flat
          label="Email"
        />

        <v-text-field
          solo-inverted
          flat
          label="Subject"
        />

        <v-textarea
          solo-inverted
          flat
          label="Message"
        />

        <v-btn
          class="ma-0"
          color="primary"
        >
          Contact Me
        </v-btn>
      </v-form>
    </v-col>

    <v-col
      cols="12"
      md="4"
      class="text-left"
    >
      <CoreSubheading class="text-uppercase">
        Social Contacts
      </CoreSubheading>

      <ResumeSocialContacts />

      <v-list
        class="transparent"
        three-line
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-icon
              class="mr-5"
              color="primary"
              size="48"
            >
              mdi-map-marker
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              Address
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ schema.basics.location.address }}<br>
              {{ schema.basics.location.city }}, {{ schema.basics.location.postalCode }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon
              size="48"
              color="primary"
              class="mr-5"
            >
              mdi-email
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              Email
            </v-list-item-title>
            <v-list-item-subtitle v-text="schema.basics.email" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon
              size="48"
              color="primary"
              class="mr-5"
            >
              mdi-phone
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              Phone
            </v-list-item-title>
            <v-list-item-subtitle v-text="schema.basics.phone" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
    <v-img
      :src="require('@/assets/john-alt.png')"
      contain
      max-width="30vw"
      style="bottom: -20px; right: 0; position: absolute;"
      width="100%"
    />
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
