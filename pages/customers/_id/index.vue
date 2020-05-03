<template>
  <div>
    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="9" xl="7">
        <v-card>
          <v-card-title primary-title>
            <v-tabs v-model="tab" grow>
              <v-tab>Information</v-tab>
              <v-tab>Another Selection</v-tab>
              <v-tab>Items</v-tab>
              <v-tab>Another Screen</v-tab>
              <v-tabs-slider color="grey lighten-2"></v-tabs-slider>
            </v-tabs>
          </v-card-title>
          <v-divider></v-divider>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-sheet class="pa-6">
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="firstname"
                      label="First Name"
                      outlined
                      dense
                    ></v-text-field>
                    <v-text-field
                      v-model="lastname"
                      label="Last Name"
                      outlined
                      dense
                    ></v-text-field>

                    <v-text-field
                      v-model="email"
                      label="Email Address"
                      outlined
                      :rules="rules.email"
                      dense
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-select
                      :items="['US Dollar $', 'Euro €', 'TND']"
                      label="Currency"
                      dense
                      outlined
                    ></v-select>
                    <v-select
                      :items="['Englisch US', 'Deutsch', 'Arabic', 'French']"
                      label="Language"
                      dense
                      outlined
                    ></v-select>
                    <v-text-field
                      v-model="website"
                      label="Website URL"
                      :rules="rules.url"
                      dense
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="firstname"
                      label="Adrresse"
                      outlined
                      dense
                    ></v-text-field>

                    <v-text-field
                      v-model="lastname"
                      label="Address (Line 2)"
                      outlined
                      dense
                    ></v-text-field>

                    <v-text-field
                      v-model="email"
                      label="City"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-select
                      :items="['USA', 'TUNISIA', 'DEUTSCHLAND']"
                      label="Country"
                      outlined
                      dense
                    ></v-select>
                    <v-text-field
                      v-model="website"
                      label="Postal Code"
                      outlined
                      dense
                    ></v-text-field>
                    <v-text-field
                      v-model="website"
                      label="State"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="mt-5">
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="firstname"
                      label="Phone Number"
                      outlined
                      dense
                    ></v-text-field>

                    <v-text-field
                      v-model="lastname"
                      label="Fax Number"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="email"
                      label="Tax Identification Number"
                      outlined
                      dense
                    ></v-text-field>
                    <v-textarea name="input-7-1" label="Notes" rows="3" outlined
                      >""</v-textarea
                    >
                  </v-col>
                </v-row>
              </v-sheet>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    rules: {
      email: [
        value => (value && value.length >= 3) || 'Min 3 characters',
        value =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
          'must be a valid email'
      ],
      url: [
        value => (value && value.length >= 3) || 'Min 3 characters',
        value =>
          /(http|https)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/.test(
            value
          ) || 'must be a valid website( http://example.com)'
      ]
    },
    firstname: '',
    lastname: '',
    email: '',
    website: ''
  }),
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  }
}
</script>
