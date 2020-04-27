<template>
  <v-navigation-drawer
    :value="value"
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
        :to="localePath(item.to)"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="$t(item.title)" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list>
      <v-list-item router exact :to="localePath('settings')">
        <v-list-item-action>
          <v-icon>mdi-cog</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ $t('SideBar.settings') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <v-divider></v-divider>
      <v-btn color="white" block tile @click="logout">
        <v-icon left>mdi-logout</v-icon>
        {{$t("Logout")}}
      </v-btn>
    </template>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'SideBar',
    props: {
      value: {
        type: Boolean
      }
    },
    data() {
      return {
        clipped: false,
        drawer: this.drawer,
        mini: false,
        expandOnHover: false,
        items: [
          {
            icon: 'mdi-view-dashboard',
            title: 'SideBar.home',
            to: '/'
          },
          {
            icon: 'mdi-account-multiple',
            title: 'SideBar.customer',
            to: 'customers'
          },

          {
            icon: 'mdi-chat-alert-outline',
            title: 'SideBar.quotes',
            to: 'quotes'
          },
          {
            icon: 'mdi-file-document',
            title: 'SideBar.invoices',
            to: 'invoices'
          },
          {
            icon: 'mdi-cash-multiple',
            title: 'SideBar.payments',
            to: 'payments'
          },
          {
            icon: 'mdi-package-variant-closed',
            title: 'SideBar.products',
            to: 'products'
          }
        ]
      }
    },
    methods: {
      async logout() {
        await this.$auth.logout()
      }
    }
  }
</script>
