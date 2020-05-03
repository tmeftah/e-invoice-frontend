<template>
  <div>
    <v-switch label="Dark Mode" v-model="dark" @change="toggleTheme"></v-switch>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  mounted() {
    this.dark = this.$vuetify.theme.dark
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = this.dark
      localStorage.setItem('useDarkTheme', this.$vuetify.theme.dark.toString())
    }
  }
}
</script>
