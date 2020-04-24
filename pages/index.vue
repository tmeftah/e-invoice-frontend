<template>
  <div>
    <div v-if="$store.state.auth">
      <v-snackbar
        top
        :timeout="timeout"
        v-model="snackbar"
        color="success"
        :absolute="absolute"
        >{{ text }}</v-snackbar
      >

      <p>
        You are authenticated. You can see the
        <NuxtLink to="/products"> products page</NuxtLink>!
      </p>
      <button @click="logout">Logout</button>
    </div>
    <p v-else>
      Please
      <NuxtLink to="/login">login</NuxtLink>.
    </p>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data: () => ({
    timeout: 2000,
    text: "Hello, I'm a snackbar",
    tt: true,
    absolute: true
  }),
  computed: {
    snackbar() {
      return this.$store.state.first_login
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/login')
    }
  }
}
</script>
