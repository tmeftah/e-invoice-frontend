<template>
  <div>
    <p>home page</p>
  </div>
  <!-- <div>
    <div v-if="$store.state.auth">
      <p>
        You are authenticated. You can see the
        <NuxtLink to="/products">products page</NuxtLink>!
      </p>
    </div>
    <p v-else>
      Please
      <NuxtLink to="/login">login</NuxtLink>.
    </p>
  </div>-->
</template>

<script>
  export default {
    middleware: 'auth',
    data: () => ({
      timeout: 2000,
      text: "I'm a snackbar",
      tt: true,
      absolute: true
    }),
    computed: {
      snackbar() {
        return this.$store.state.first_login
      }
    }
  }
</script>
