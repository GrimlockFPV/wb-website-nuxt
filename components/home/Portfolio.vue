<template>
    <div>
    <CoreSection id="portfolio">
      <v-container class="p-0" fluid>
        <v-row class="g-0">
          <v-col
            cols="12"
            lg="4"
            sm="6"
          >
            <a class="portfolio-box" href="require('@/assets/portfolio/fullsize/1.jpg')" 
              title="Project Name">
              <v-img 
                class="img-fluid" 
                :src="require('@/assets/portfolio/thumbnails/1.jpg')" 
                alt="..."
              >
              </v-img>
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Project Name</div>
              </div>
            </a>
          </v-col>
          <v-col
            cols="12"
            lg="4" 
            sm="6"
          >
            <a class="portfolio-box" href="require('@/assets/portfolio/fullsize/2.jpg')" title="Project Name">
              <v-img class="img-fluid" 
                :src="require('@/assets/portfolio/thumbnails/2.jpg')" 
                alt="..."
              >
              </v-img>
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Project Name</div>
              </div>
            </a>
          </v-col>
          <v-col
            cols="12"
            lg="4" 
            sm="6"
          >
            <a class="portfolio-box" href="require('@/assets/portfolio/fullsize/3.jpg')" title="Project Name">
              <v-img 
                class="img-fluid" 
                :src="require('@/assets/portfolio/thumbnails/3.jpg')" 
                alt="..."
              >
              </v-img>
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Project Name</div>
              </div>
            </a>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            lg="4" 
            sm="6"
          >
            <a class="portfolio-box" href="require('@/assets/portfolio/fullsize/4.jpg')" title="Project Name">
              <v-img 
                class="img-fluid" 
                :src="require('@/assets/portfolio/thumbnails/4.jpg')" 
                alt="...">
              </v-img>
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Project Name</div>
              </div>
            </a>
          </v-col>
          <v-col
            cols="12"
            lg="4" 
            sm="6"
          >
            <a 
              class="portfolio-box" 
              href="require('@/assets/portfolio/fullsize/5.jpg')" 
              title="Project Name"
            >
              <v-img 
                class="img-fluid" 
                :src="require('@/assets/portfolio/thumbnails/5.jpg')" 
                alt="..."
              >
              </v-img>
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Project Name</div>
              </div>
            </a>
          </v-col>
          <v-col
            cols="12"
            lg="4"
            sm="6"
          >
            <a 
              class="portfolio-box" 
              href="require('@/assets/portfolio/fullsize/6.jpg')" 
              title="Project Name"
            >
              <v-img 
                class="img-fluid" 
                :src="require('@/assets/portfolio/thumbnails/6.jpg')" 
                alt="..."
              >
              </v-img>
              <div class="portfolio-box-caption p-3">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Project Name</div>
              </div>
            </a>
          </v-col>
        </v-row>>
      </v-container>
    </CoreSection>
    </div>
</template>