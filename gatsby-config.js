/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
   siteMetadata: {
    title: "Point Blank",
    description: "We are POint Blank",
    author: "@sparshkesari",
    data : ['item1','item2']
  },
  /* Your site config here */
  plugins: [    
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    }
  ],
  
}
