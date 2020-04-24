<template>
  <div>
    products page
    <div>
      <v-card>
        <v-card-title>
          <v-text-field
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="products"
          :options.sync="options"
          :server-items-length="total"
          :loading="loading"
          @click:row="goTo"
          class="elevation-1"
        ></v-data-table>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  data() {
    return {
      total: 0,
      desserts: [],
      loading: true,
      options: {},
      headers: [
        {
          text: 'name',
          align: 'start',
          sortable: false,
          value: 'name'
        }
      ],
      products: []
    }
  },

  mounted() {
    this.getDataFromApi()
  },
  methods: {
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
      this.$router.push({ path: '/products/' + value.id })
    }
  }
}
</script>
