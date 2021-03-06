export default {
  target: "static",
  head: {
    title: "martin-kohnle",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: 'icon', type: 'image/png', sizes:'32x32', href: '/favicon.png' }],
    css: [
      // Load a Node.js module directly (here it's a Sass file)
      "bulma",
      // CSS file in the project
      "~/assets/css/main.css",
      // SCSS file in the project
      "~/assets/css/main.scss"
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/image"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content"
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
  }
};
