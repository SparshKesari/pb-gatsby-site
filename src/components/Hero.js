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
    const {file:{
        childImageSharp :{fluid},
    },
} = useStaticQuery(query)
    // console.log(data)

    return (

<header>
    <div className="section-center hero-center">
        <article className="hero-info">
          {/* <div>
            <div className="underline"></div>
            <h1>we are POINT BLANK</h1>
            <h4>freelance web and mobile UI/UX Designer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div> */}
        </article>
        <Image fluid={fluid} className="hero-img" />
    </div>
</header>
    )
}

export default Hero
