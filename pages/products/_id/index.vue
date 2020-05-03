<template>
  <div>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    name : {{ product.name }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      product: {}
    }
  },
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },

  mounted() {
    this.getDataFromApi()
  },
  methods: {
    async getDataFromApi() {
      this.loading = true
      let data = (await this.$axios.get('products/' + this.$route.params.id))
        .data

      ;(this.loading = false), (this.product = data)
    }
  }
}
</script>
