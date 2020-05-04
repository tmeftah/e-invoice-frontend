<template>
  <v-card>
    <v-card-title primary-title style="background-color:#005082">
      <v-tabs
        v-model="tab"
        grow
        centered
        background-color="#005082"
        show-arrows
        color="#ffb340"
      >
        <v-tab>Information</v-tab>
        <v-tab>Another Selection</v-tab>
        <v-tab>Items</v-tab>
        <v-tab>Another Screen</v-tab>
        <v-tabs-slider></v-tabs-slider>
      </v-tabs>
    </v-card-title>
    <v-divider></v-divider>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-container grid-list-xs style="background-color:#ffa41b">
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="firstname"
                label=" First Name"
                filled
                rounded
                dense
                background-color="#ffb340"
                color="black"
                light
              ></v-text-field>
              <v-text-field
                v-model="lastname"
                label="Last Name"
                filled
                rounded
                dense
                background-color="#ffb340"
                color="black"
                light
              ></v-text-field>

              <v-text-field
                v-model="email"
                label="Email Address"
                :rules="rules.email"
                filled
                rounded
                dense
                background-color="#ffb340"
                color="black"
                light
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-select
                :items="['US Dollar $', 'Euro €', 'TND']"
                label="Currency"
                filled
                rounded
                dense
                background-color="#ffb340"
                color="black"
                light
              ></v-select>
              <v-select
                :items="['Englisch US', 'Deutsch', 'Arabic', 'French']"
                label="Language"
                filled
                rounded
                dense
                background-color="#ffb340"
                color="black"
                light
              ></v-select>
              <v-text-field
                v-model="website"
                label="Website URL"
                :rules="rules.url"
                filled
                rounded
                dense
                background-color="#ffb340"
                color="black"
                light
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="firstname"
                label="Adrresse"
                filled
                rounded
                dense
                background-color="#ffb340"
                color="black"
                light
              ></v-text-field>

              <v-text-field
                v-model="lastname"
                label="Address (Line 2)"
                filled
                rounded
                dense
                background-color="#ffb340"
                color="black"
                light
              ></v-text-field>

              <v-text-field
                v-model="email"
                label="City"
                filled
                rounded
                dense
                background-color="#ffb340"
                color="black"
                light
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-select
                :items="['USA', 'TUNISIA', 'DEUTSCHLAND']"
                label="Country"
                filled
                rounded
                dense
                background-color="#ffb340"
                color="black"
                light
              ></v-select>
              <v-text-field
                v-model="website"
                label="Postal Code"
                filled
                rounded
                dense
                background-color="#ffb340"
                color="black"
                light
              ></v-text-field>
              <v-text-field
                v-model="website"
                label="State"
                filled
                rounded
                dense
                background-color="#ffb340"
                color="black"
                light
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-5">
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="firstname"
                label="Phone Number"
                filled
                rounded
                dense
                background-color="#ffb340"
                color="black"
                light
              ></v-text-field>

              <v-text-field
                v-model="lastname"
                label="Fax Number"
                filled
                rounded
                dense
                background-color="#ffb340"
                color="black"
                light
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="email"
                label="Tax Identification Number"
                filled
                rounded
                dense
                background-color="#ffb340"
                color="black"
                light
              ></v-text-field>
              <v-textarea
                name="input-7-1"
                label="Notes"
                rows="3"
                filled
                rounded
                dense
                auto-grow
                background-color="#ffb340"
                color="black"
                light
              >""</v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
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
