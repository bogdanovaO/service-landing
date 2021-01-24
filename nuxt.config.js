module.exports = {
  mode: 'universal',
  target: 'static',

  server: {
    port: 5000,
    host: "localhost"
  },

  // env: {
  //   baseUrl: process.env.BASE_URL,
  //   tinyKey: process.env.TINY_KEY
  // },
  head: {
    htmlAttrs: { lang: "ru" },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  buildModules: [
    '@nuxtjs/fontawesome'
  ],
  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faSearch','faRubleSign', 'faPhone', "faArrowRight"],
      brands: ['faVk',   'faInstagram', 'faYoutube']
    }
  },

  modules: [
    '@nuxtjs/bulma',
    'vue-scrollto/nuxt',
    '@nuxtjs/svg',
    'nuxt-svg-loader',
    '@nuxtjs/axios',
    ['nuxt-mail', {
      smtp: {
        host: "smtp.gmail.com",
        port: 465,
        service: 'Gmail',
        secure: true,
        auth: {
        user: 'bettercallnik@gmail.com',
        pass: 'Zhopapopa229',
      }
      },
    },
  ]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    optimizeCss: false,
    // filenames: {
    //   app:  'js/[contenthash].js',
    //   chunk: 'js/[contenthash].js',
    //   css: 'css/[contenthash].css',
    //   font: 'fonts/[contenthash:7].[ext]',
    //   video:  'videos/[contenthash:7].[ext]'
    // }


}
}