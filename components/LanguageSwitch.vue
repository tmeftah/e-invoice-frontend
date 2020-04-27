<template>
  <v-dialog v-model="dialog" scrollable max-width="300px">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on"> <v-icon>mdi-translate</v-icon></v-btn>
    </template>
    <v-card>
      <v-card-title>{{ $t('select_language') }}</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-list>
          <v-list-item
            v-for="locale in $i18n.locales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
          >
            <country-flag :country="locale.country" size="normal" />
            {{ locale.name }}
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text @click="dialog = false">{{ $t('close') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'LanguageSwitch',
  data() {
    return {
      dialogm1: '',
      dialog: false
    }
  }
}
</script>
