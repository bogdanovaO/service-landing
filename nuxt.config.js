export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  // mode: 'universal',
  target: 'server',
  ssr: true,
  server: {
    port: 5000,
    host: "localhost"
  },
  env: {
    baseUrl: process.env.BASE_URL,
    tinyKey: process.env.TINY_KEY
  },
  // Target (https://go.nuxtjs.dev/config-target)
  // target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'service-landing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome'
  ],
  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faUserCog','faSearch','faRubleSign', 'faPhone', "faArrowRight"],
      brands: ['faVk',  'faWhatsapp', 'faInstagram', 'faYoutube']
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
        user: 'olgabogdanovanew@gmail.com',
        pass: 'nikilauda',
      }
      },
    },
  ]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  // build: {
  //   postcss: {
  //     preset: {
  //       features: {
  //         customProperties: false
  //       }
  //     }
  //   },
  // }
  build: {
    extend(config, ctx) {
    }
  }
}
