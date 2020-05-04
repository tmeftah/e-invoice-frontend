<template>
  <div>
    <v-row>
      <v-col>
        <v-card height="100%" dark color="#ffa41b">
          <v-card-title
            class="py-2"
            style="background-color:#005082"
          >Recent Activity</v-card-title>
          <v-list dense color="#ffa41b">
            <v-list-item-group>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>20 hours ago — Invoice modified</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>20 hours ago — Invoice created for xxx</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col>
        <v-card dark color="#ffa41b">
          <v-card-title
            dark
            class="py-2"
            style="background-color:#005082"
          >Overview</v-card-title>
          <v-list dense color="#ffa41b">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon left>mdi-clock</v-icon>Total Outstanding:
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text>248.50 Euro</v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon left>mdi-alert</v-icon>Total Overdue:
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text>0.00 Euro</v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon left>mdi-check</v-icon>Total Collected this Year:
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text>0.00 Euro</v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <v-icon left>mdi-account-multiple</v-icon>Clients:
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text>1</v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card dark color="#ffa41b">
          <v-card-title
            class="py-2"
            style="background-color:#005082"
          >Invoiced / Received (Jan 01 2020 - Apr 28 2020)</v-card-title>
          <v-sheet height="300px" tile color="#ffa41b"></v-sheet>
        </v-card>
      </v-col>
    </v-row>
  </div>
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
