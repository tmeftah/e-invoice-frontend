<template>
  <v-footer :fixed="fixed" app>
    <span>Tarek Meftah &copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        fixed: false
      }
    }
  }
</script>