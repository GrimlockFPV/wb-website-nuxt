<template>
    <div>
        <CoreSection class="page-section" id="contact">
      <v-container class="px-4 px-lg-5">
        <v-row class="gx-4 gx-lg-5 justify-content-center">
          <v-col
            cols="12"
            lg="8" 
            xl="6" 
            class="text-center"
          >
            <CoreHeading class="mt-0">Thanks for reaching out! <!--{{ name }}--></CoreHeading>
            <hr class="divider"/>
            <p class="text-muted mb-5">I look forward to connecting with you soon!</p>
          </v-col>
          <v-col
            cols="12"
            lg="8"
            xl="8" 
            class="text-center"
          >
            <CoreHeading class="mt-0">Need help with a project?</CoreHeading>
            <hr class="divider"/>
            <p class="text-black mb-5">Send me a message and I will
              get back to you as soon as possible!</p>
          </v-col>
        </v-row>
        <v-row class="gx-4 gx-lg-5 mb-5 justify-content-center">
          <v-col
            cols="12"
            lg="6"
          >
            <div class="fieldWrapper form-floating mb-3">
            <form id="contactForm" action="{% url 'home' %}" method="post">
            <!-- Submit Button-->
            <div class="d-grid">
              <v-btn class="primary btn-xl">Submit</v-btn>
            </div>
            </form>
            </div>
          </v-col>
        </v-row>
        <v-row class="gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-4 text-center mb-5 mb-lg-0">
            <i class="bi-phone fs-2 mb-3 text-muted"></i>
            <div>+1 (408) 505-4000</div>
          </div>
        </v-row>
      </v-container>
    </CoreSection>
    </div>
</template>