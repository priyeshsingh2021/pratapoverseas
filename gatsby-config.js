require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Pratap Overseas`,
    siteLanguage: `en`,
    siteHeadline: `Pratap Overseas`,
    siteTitleAlt: `Pratap Overseas`,
  },
  plugins: [
    {
      resolve: `./@lekoarts/gatsby-theme-emma`,
      // See the theme's README for all available options
      // options: {},
      options: {
        name: `Pratap Overseas`,
        location: `Bihar - 800023, India | Contact: +91-7763912309 `,
        navigation: [
          { name: `Brass Work`, slug: `/brass-work` },
          { name: `Madhubani Painting`, slug: `/madhubani` },
          { name: `Tikuli art`, slug: `/tikuli` },
          { name: `Oil Paintings`, slug: `/oilpainting` },
        ],
        socialMedia: [
          {
            title: `Twitter`,
            href: `https://twitter.com/OverseasPratap`
          },
          {
            title: `Pinterest`,
            href: `https://in.pinterest.com/pratapoverseas/`
          },
          {
            title: `Linkedin`,
            href: `https://www.linkedin.com/in/pratap-overseas-5a08501b4/`
          },
          {
            title: `WhatsApp`,
            href: `https://api.whatsapp.com/send?phone=917763912309&text=Hi`
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pratap Overseas`,
        short_name: `PratapOverseas`,
        description: `Minimalistic bright portfolio with full-width grid and large images`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#b83280`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
