<template>
  <v-app style="font-family: Roboto;" id="inspire" dark>
    <SideBar />

    <v-content style="background-color:#000839;">
      <v-container v-if="isAuthenticated">
        <nuxt />
      </v-container>
      <v-container v-else fluid fill-height style="background-color:#000839;">
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
    data: () => ({
      goDark: true
    }),
    components: {
      SideBar,
      Footer
    },
    computed: {
      ...mapGetters(['isAuthenticated', 'loggedInUser'])
    },
    beforeMount() {
      const theme = localStorage.getItem('useDarkTheme')
      if (theme) {
        if (theme == 'true') {
          this.$vuetify.theme.dark = true
        } else this.$vuetify.theme.dark = true
        this.goDark = this.$vuetify.theme.dark
      }
    }
  }
</script>
