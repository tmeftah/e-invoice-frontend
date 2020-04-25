<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      :mini-variant.sync="mini"
      :expand-on-hover="expandOnHover"
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item router exact to="/settings">
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="white"
      flat
      app
      elevation="3"
      dense
    >
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
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>Tarek Meftah &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      mini: true,
      expandOnHover: true,
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-account-multiple',
          title: 'Customers',
          to: '/customers'
        },

        {
          icon: 'mdi-chat-alert-outline',
          title: 'Quotes',
          to: '/quotes'
        },
        {
          icon: 'mdi-file-document',
          title: 'Invoices',
          to: '/invoices'
        },
        {
          icon: 'mdi-cash-multiple',
          title: 'Payments',
          to: '/payments'
        },
        {
          icon: '  mdi-package-variant-closed',
          title: 'Products',
          to: '/Products'
        }
      ]
    }
  }
}
</script>
