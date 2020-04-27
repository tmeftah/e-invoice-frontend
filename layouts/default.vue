<template>
  <v-app>
    <Header />
    <v-content>
      <v-container v-if="isAuthenticated">
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
  import Header from '@/components/HeadBar.vue'
  import Footer from '@/components/FooterBar.vue'
  export default {
    name: 'DefaultLayout',
    components: {
      Header,
      Footer
    },
    computed: {
      ...mapGetters(['isAuthenticated', 'loggedInUser'])
    }
  }
</script>
