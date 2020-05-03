<template>
  <v-row class="d-flex justify-center">
    <v-col cols="12" sm="9" xl="7">
      <v-card>
        <v-card-title class="text-capitalize">
          {{ $t('SideBar.customers') }}
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            :label="$t('search')"
            single-line
            hide-details
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn color="success" dark>
            <v-icon>mdi-plus</v-icon>
            {{ $t('New') }}
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-list dense class="py-0">
            <div v-for="client in clients" :key="client.name">
              <v-list-item three-line>
                <v-list-item-action>
                  <v-checkbox color="primary" dense></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="text-capitalize">{{
                    client.name
                  }}</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-icon small left>mdi-email-outline</v-icon>
                    {{ client.email }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <v-icon small left>mdi-phone-outline</v-icon>
                    {{ client.phone }}
                  </v-list-item-subtitle>
                </v-list-item-content>

                <div class="d-flex flex-row">
                  <v-btn
                    color="grey darken-1"
                    class="mx-1 mt-0"
                    small
                    outlined
                    @click="goTo(client)"
                  >
                    <v-icon small>mdi-pen</v-icon>
                  </v-btn>
                  <v-menu bottom offset-y left nudge-bottom="10">
                    <template v-slot:activator="{ on }">
                      <v-btn
                        class="mx-1"
                        small
                        v-on="on"
                        outlined
                        color="grey darken-1"
                      >
                        <v-icon small>mdi-dots-horizontal</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item>
                        <v-list-item-title>New Invoice</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>New Bill</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
              </v-list-item>
              <v-divider></v-divider>
            </div>
          </v-list>
          <v-row>
            <v-col class="d-inline-flex">
              {{ subtitle }}
              <v-pagination
                v-model="options.page"
                :length="Math.ceil(total / options.itemsPerPage)"
                next-icon="mdi-menu-right"
                prev-icon="mdi-menu-left"
                @input="onPageChange"
                dense
              ></v-pagination>

              <v-select
                :items="[5, 10, 20, 50]"
                class="pt-0"
                v-model="options.itemsPerPage"
                outlined
                dense
                style="max-width:80px"
                v-on:change="getDataFromApi()"
                hide-details
              ></v-select>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  watch: {
    'pagination.page': newPage => {}
  },
  computed: {
    subtitle() {
      let start = this.options.itemsPerPage * (this.options.page - 1) + 1
      let end =
        this.total > this.options.itemsPerPage
          ? this.options.page * this.options.itemsPerPage > this.total
            ? this.total
            : this.options.page * this.options.itemsPerPage
          : this.total
      const msg = `Showing ${start} to ${end} results on  ${this.total} entries`
      return msg
    }
  },
  data: () => ({
    loading: false,
    options: { page: 1, itemsPerPage: 5 },
    search: '',
    total: 0,

    clients: [
      {
        id: 1,
        name: 'client 1',
        email: 'email1@email.com',
        phone: '000-0000000'
      },
      {
        id: 2,
        name: 'client 2',
        email: 'email2@email.com',
        phone: '000-0000000'
      },
      {
        id: 3,
        name: 'client 3',
        email: 'email3@email.com',
        phone: '000-0000000'
      }
    ],
    products: []
  }),
  mounted() {
    // this.getDataFromApi()
  },
  methods: {
    onPageChange(e) {
      this.getDataFromApi()
    },
    async getDataFromApi() {
      this.loading = true
      let data = (
        await this.$axios.get('products', {
          params: {
            page: this.options.page,
            per_page: this.options.itemsPerPage
          }
        })
      ).data

      ;(this.loading = false),
        (this.products = data.products),
        (this.total = data.total)
    },
    goTo(value) {
      this.$router.push(
        this.localePath({
          name: 'customers-id',
          params: { id: value.id }
        })
      )
    }
  }
}
</script>
