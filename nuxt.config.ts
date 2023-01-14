// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          title: "NUXT",
          link: [
            { href: "css/styles.css",
            rel: "stylesheet",
            crossorigin:"anonymous" },
          ],
          script: [{ src: '/js/bootstrap.min.js' }, {src:'https://use.fontawesome.com/releases/v6.1.0/js/all.js'} ],
        },
      },
})
