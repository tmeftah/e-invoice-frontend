<template>
  <div>
    <v-row>
      <v-col>
        <v-btn rounded color="success" dark class="float-right">
          <v-icon>mdi-plus</v-icon>
          {{$t("New")}}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card outlined>
          <v-card-title>
            Customers
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              :label="$t('search')"
              single-line
              hide-details
              style="max-width:250px;"
            ></v-text-field>
          </v-card-title>
          <v-card-subtitle>{{subtitle}}</v-card-subtitle>
          <v-divider></v-divider>
          <v-list flat dense>
            <div v-for=" client in products" :key="client.name">
              <v-list-item>
                <template>
                  <v-list-item-action>
                    <v-checkbox color="primary"></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>{{client.name}}</v-list-item-title>
                    <v-list-item-subtitle>
                      <div>
                        <v-icon small left>mdi-email-outline</v-icon>
                        {{client.email}}
                        <v-spacer></v-spacer>
                        <v-icon small left>mdi-phone-outline</v-icon>
                        {{client.phone}}
                      </div>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </template>
                <v-list-item-action class="d-flex flex-row">
                  <v-btn color="grey darken-1" class="mx-1" small outlined>
                    <v-icon small>mdi-pen</v-icon>
                  </v-btn>
                  <v-menu
                    bottom
                    offset-y
                    left
                    nudge-bottom="10"
                    nudge-width="150"
                    nudge-right="0"
                    open-delay="500"
                    absolute
                    offset-overflow
                  >
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
                </v-list-item-action>
              </v-list-item>
            </div>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="d-flex">
          <v-pagination
            v-model="options.page"
            :length="Math.ceil(total/options.itemsPerPage)"
            circle
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            @input="onPageChange"
          ></v-pagination>

          <v-select
            :items="[5, 10, 20, 50]"
            v-model="options.itemsPerPage"
            solo
            dense
            rounded
            suffix="per page"
            style="max-width:170px"
            v-on:change="getDataFromApi()"
          ></v-select>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
  export default {
    watch: {
      'pagination.page': newPage => {
        console.log(newPage)
      }
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
        { name: 'client 1', email: 'email1@email.com', phone: '000-0000000' },
        { name: 'client 2', email: 'email2@email.com', phone: '000-0000000' },
        { name: 'client 3', email: 'email3@email.com', phone: '000-0000000' }
      ],
      products: []
    }),
    mounted() {
      this.getDataFromApi()
    },
    methods: {
      onPageChange(e) {
        this.getDataFromApi()
        console.log(this.page)
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
      }
    }
  }
</script>