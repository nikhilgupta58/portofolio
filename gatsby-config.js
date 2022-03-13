/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  pathPrefix:"/portofolio",
  siteMetadata: {
    title: `Projects`,
    siteUrl: `https://ln11rhy9.api.sanity.io/v1/graphql/production/default`,
  },
  plugins: [
    "gatsby-plugin-image",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "ln11rhy9",
        dataset: "production",
      },
    },
    "gatsby-plugin-emotion",
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon:'src/images/icon.png',
      },
    },
  ],
};
