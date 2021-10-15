<template>
  <v-navigation-drawer
      v-model="drawer"
      temporary
      class="text-center"
      color="#181818"
      absolute
      width = "200"
      id = "drawer"
    >
    <v-menu>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon> 
                </v-btn>
            </template>
            <v-list>
                <v-list-item-group v-for="item in items" :key="item.title">
                    <v-list-item-icon>{{ item.icon }}</v-list-item-icon>
                    <v-list-item-content :to="item.to">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item-group>
            </v-list>
        </v-menu>
  </v-navigation-drawer>
</template>

<script>
// Utilities
export default {
  data () {
    return {
      drawer: null,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
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
          to: '/contact'
        }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Wayne's World-wide Website"    }
  },
  
}
</script>
