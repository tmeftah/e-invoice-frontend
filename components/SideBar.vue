<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      :expand-on-hover="expandOnHover"
      app
      fixed
      v-if="isAuthenticated"
      width="200px"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="localePath(item.to)"
          router
          :exact="item.exact"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title
              class="text-capitalize"
              v-text="$t(item.title)"
            />
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
            <v-list-item-title v-text="$t('SideBar.settings')" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <v-divider></v-divider>
        <v-list>
          <v-list-item router exact @click="logout">
            <v-list-item-action>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="$t('Logout')" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-app-bar app dense flat>
      <template v-if="isAuthenticated">
        <v-toolbar-title style="width: 300px" class="ml-0 pl-2">
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
          <span class="hidden-sm-and-down">e-invoice</span>
        </v-toolbar-title>
        <!-- <v-text-field
          flat
          dense
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          :label="$t('search')"
          class="hidden-sm-and-down"
        ></v-text-field>-->
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
export default {
  name: 'SideBar',
  components: {
    LanguageSwitch
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },

  data() {
    return {
      clipped: false,
      drawer: null,
      mini: false,
      expandOnHover: false,
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'SideBar.home',
          to: '/',
          exact: true
        },
        {
          icon: 'mdi-account-multiple',
          title: 'SideBar.customers',
          to: 'customers',
          exact: false
        },

        {
          icon: 'mdi-chat-alert-outline',
          title: 'SideBar.quotes',
          to: 'quotes',
          exact: false
        },
        {
          icon: 'mdi-file-document',
          title: 'SideBar.invoices',
          to: 'invoices',
          exact: false
        },
        {
          icon: 'mdi-cash-multiple',
          title: 'SideBar.payments',
          to: 'payments',
          exact: false
        },
        {
          icon: 'mdi-package-variant-closed',
          title: 'SideBar.products',
          to: 'products',
          exact: false
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
