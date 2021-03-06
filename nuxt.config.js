import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto|Source Sans Serif|Krub'
      }
    ]
  },
  generate: {
    fallback: true
  },

  router: {
    middleware: 'loggedIn'
  },

  /*
   ** Add server middleware
   ** Nuxt.js uses `connect` module as server
   ** So most of express middleware works with nuxt.js server middleware
   */

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  // css: ['~/assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/notifier', '~/plugins/i18n', '~/plugins/country-flag'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',

    [
      'nuxt-i18n',
      {
        baseUrl: 'https://sudtechnics.pythonanywhere.com',
        seo: false, // see doc and layouts

        locales: [
          {
            name: 'Deutsch',
            code: 'de',
            iso: 'de-DE',
            country: 'de',
            file: 'de-DE.json'
          },
          {
            name: 'English',
            code: 'en',
            iso: 'en-US',
            country: 'us',
            file: 'en-US.json'
          }
        ],
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'lang'
        },
        strategy: 'prefix_except_default',
        vueI18n: {
          fallbackLocale: 'de'
        },

        langDir: 'lang/',
        defaultLocale: 'de',
        lazy: true
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://sudtechnics.pythonanywhere.com/'
  },
  auth: {
    localStorage: false,
    cookie: {},
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'login',
            method: 'post',
            propertyName: 'data.access_token'
          },
          user: false,
          tokenRequired: true,
          tokenType: 'bearer',

          logout: false
        }
      }
    },
    redirect: {
      login: '/login',
      home: '/',
      logout: '/login'
    },
    resetOnError: true,
    plugins: ['~/plugins/axios', '~/plugins/auth']
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
