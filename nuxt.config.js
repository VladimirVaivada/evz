import colors from 'vuetify/lib/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ru-RU'
    },
    titleTemplate: `%s / Евросвязь`,
    title: 'Веб-сайт',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'initial-scale=1.0, user-scalable=no, maximum-scale=1.0'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
      '@nuxtjs/firebase',
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  /*
   ** Firebase module configuration
   ** https://firebase.nuxtjs.org/guide/getting-started/#configure
   */
  firebase: {
    config: {
      apiKey: "AIzaSyBJ3qq7g0UhFe15iifgp1t4dHMEqEQ6jGE",
      authDomain: "evz-site.firebaseapp.com",
      databaseURL: "https://evz-site.firebaseio.com",
      projectId: "evz-site",
      storageBucket: "evz-site.appspot.com",
      messagingSenderId: "187721311188",
      appId: "1:187721311188:web:499705e4d16fbf221fac41"
    },
    services: {
      firestore:true
    }
  },

  /*
   ** ESlint module configuration
   */
  eslint: { fix:true },

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    // customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.orange,
          secondary: colors.blue.darken3,
          anchor: colors.blue.darken2
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
