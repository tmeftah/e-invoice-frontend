<template>
  <v-app style="font-family: Roboto;" id="inspire">
    <SideBar />

    <v-content>
      <v-container v-if="isAuthenticated" class="px-6">
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
  data: () => ({
    goDark: false
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
      } else this.$vuetify.theme.dark = false
      this.goDark = this.$vuetify.theme.dark
    }
  }
}
</script>
