<template>
  <div>
    <SideBar v-model="drawer" v-if="isAuthenticated" />
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="white"
      flat
      app
      elevation="1"
      dense
    >
      <template v-if="isAuthenticated">
        <v-toolbar-title style="width: 300px" class="ml-0 pl-2">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <span class="hidden-sm-and-down">e-invoice</span>
        </v-toolbar-title>
        <v-text-field
          flat
          dense
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          :label="$t('search')"
          class="hidden-sm-and-down"
        ></v-text-field>
      </template>
      <template v-else>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-2">
          <span class="hidden-sm-and-down">e-invoice</span>
        </v-toolbar-title>
      </template>
      <v-spacer></v-spacer>
      <LanguageSwitch />
    </v-app-bar>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import LanguageSwitch from '@/components/LanguageSwitch.vue'
  import SideBar from '@/components/SideBar.vue'
  export default {
    components: {
      LanguageSwitch,
      SideBar
    },
    computed: {
      ...mapGetters(['isAuthenticated', 'loggedInUser'])
    },

    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        mini: true,
        expandOnHover: true
      }
    }
  }
</script>
