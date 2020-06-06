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
    titleTemplate: `%s | Евросвязь`,
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
      },
      {
        name: "yandex-verification",
        content: "436e7132aa84a034"
      }
    ],
    link: [
      {rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon.png"},
      {rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"},
      {rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"},
      {rel:"icon", type:"image/x-icon", href: "/favicon.ico"},
      {rel:"manifest", href:"/site.webmanifest"},
      {rel:"mask-icon", href:"/safari-pinned-tab.svg", color:"#844dc9"},
      {name:"msapplication-TileColor", content:"#da532c"},
      {name:"theme-color", content:"#ffffff"}
    ]
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
  modules: [],

  /*
   ** ESlint module configuration
   */
  eslint: { fix:true },

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.orange,
          secondary: colors.blue.darken3,
          anchor: colors.blue.darken2
        }
      }
    },
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
