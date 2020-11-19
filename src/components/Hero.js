import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "./socialLinks"

const query = graphql`
    {
      file(relativePath: {eq: "hero.png"}) {
        childImageSharp {
          fluid {
            
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

function Hero() {
    return (
        <div>
            <h1>Hero Insert</h1>
        </div>
    )
}

export default Hero
