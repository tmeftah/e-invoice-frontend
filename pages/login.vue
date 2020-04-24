<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <h1 class="title mb-3">Sign in to access the app</h1>
      <v-spacer></v-spacer>
      <v-form method="post" @submit.prevent="login">
        <v-text-field v-model="username" label="username" required></v-text-field>
        <v-text-field v-model="password" label="password" required></v-text-field>
        <v-btn color="success" type="submit">Login</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
  import { state } from '../store'
  const Cookie = process.client ? require('js-cookie') : undefined

  export default {
    layout: 'login',
    auth: 'guest',
    data() {
      return {
        username: 'admin',
        password: 'demo',
        error: null
      }
    },
    methods: {
      async login() {
        await this.$auth
          .loginWith('local', {
            data: {
              username: this.username,
              password: this.password
            }
          })
          .then(resp => {
            this.$auth.setToken('local', 'Bearer ' + resp.data.access_token)
            this.$auth.setRefreshToken('local', resp.data.refresh_token)
            this.$axios.setHeader(
              'Authorization',
              'Bearer ' + resp.data.access_token
            )
            this.$auth.ctx.app.$axios.setHeader(
              'Authorization',
              'Bearer ' + resp.data.access_token
            )
            this.$store.commit('firtsLogin', true)
            this.$router.push('/')
          })
          .catch(error => {
            if (!error.response) {
              // network error
              this.$notifier.showMessage({
                content: 'Server not responding',
                color: 'error'
              })

              this.errorStatus = 'Error: Network Error'
            } else {
              this.errorStatus = error.response.data.message
            }
          })
      }
    }
  }
</script>
