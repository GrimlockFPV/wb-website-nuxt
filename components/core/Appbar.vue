<template>
    <v-app-bar>
        <v-toolbar-title>
            <img
                src="@/assets/grimlock.png"
                alt="Wayne's World-wide Website"
                class="mt-8 hidden-sm-and-up"
            />
            <img
                src="@/assets/grimlock.png"
                alt="Wayne's World-wide Website"
                class="mt-1 hidden-md-and-down"
                height="50px"
            />
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-for="item in menu" :key="item.title" :to="item.link" text>{{ item.title }}</v-btn>
        </v-toolbar-items>
        
    </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    menu: [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "About",
        link: "#about",
      },
      {
        title: "Projects",
        link: "/projects",
      },
      {
        title: "Blog",
        link: "/blog",
      },
      {
        title: "Resume",
        link: "/resume",
      },
      {
        title: "Contact",
        link: "#contact",
      },
    ],
  }),
};
