
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    // script: [
    //   {
    //     src: "/js/app-script.js",
    //     body: true
    //   },
    //   {
    //     src: "/plugins/global/plugins.bundle.js",
    //     body: true
    //   },
    //   {
    //     src: "/plugins/custom/prismjs/prismjs.bundle.js",
    //     body: true,
    //   },
    //   {
    //     src: "/js/scripts.bundle.js",
    //     body: true,
    //   }
    // ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700',
        lazyload: true
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#f64e60' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/app.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/fireauth.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  router: {
    middleware: 'router-auth'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/firebase',
  ],
  firebase: {
    config: {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: ""
    },
    services: {
      auth: true // Just as example. Can be any other service.
    },
    analytics: false,
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://localhost:8080'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
