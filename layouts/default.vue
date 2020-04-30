<template>
  <v-app
    style="
  background: #3A1C71;
  background: -webkit-linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71);
  background: linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71);
"
  >
    <SideBar />

    <v-content>
      <v-container v-if="isAuthenticated " fluid class="px-6">
        <nuxt />
      </v-container>
      <v-container v-else fluid fill-height>
        <nuxt />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SideBar from '@/components/SideBar.vue'
  import Footer from '@/components/FooterBar.vue'
  export default {
    name: 'DefaultLayout',
    components: {
      SideBar,
      Footer
    },
    computed: {
      ...mapGetters(['isAuthenticated', 'loggedInUser'])
    }
  }
</script>
