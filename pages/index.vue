<template>
  <div>
    <div v-if="$store.state.auth">
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
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/login')
    }
  }
}
</script>
