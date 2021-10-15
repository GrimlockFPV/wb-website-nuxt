<template>
  <div>
    <v-app-bar app align-self-center>
      <!--<v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      /-->
      <v-app-bar-nav-icon  @click="drawer = !drawer" :src="require('@/assets/grimlock-white.png')" class="hidden-md-and-up"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-h4 text-center">
          <img
            src="@/assets/grimlock-white.png"
            alt="Wayne's World"
            class="mt-8 hidden-sm-and-up"
          />
          <img
            src="@/assets/grimlock-white.png"
            alt="Wayne's World"
            class="mr-2 mb-0 hidden-md-and-down"
            height="40px"
          />
          Wayne's World
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items v-for="(item, i) in items" :key="i" class="hidden-sm-and-down text-button">
          <v-btn nuxt :to="item.to">{{item.title}}</v-btn>
          </v-toolbar-items>
  </v-app-bar>
  
    <v-navigation-drawer
      v-model="drawer"
      temporary
      absolute
      width = "200"
      id = "drawer"
    >
    </v-navigation-drawer>
    </div>
</template>


<script>
export default {
  data: () => ({
      drawer: null,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-electron-framework',
          title: 'Projects',
          to: '/projects'
        },
        {
          icon: 'mdi-post-outline',
          title: 'Blog',
          to: '/blog'
        },
        {
          icon: 'mdi-file-account',
          title: 'Resume',
          to: '/resume'
        },
        {
          icon: 'mdi-contacts',
          title: 'Contact',
          to: '/resume#lets-talk'
        }],
      miniVariant: false,
      right: true,
      title: "Wayne's World-wide Website"    
    })
}

</script>
