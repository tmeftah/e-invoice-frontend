<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer fixed app>
      <span>Tarek Meftah &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
