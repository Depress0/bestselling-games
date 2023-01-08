import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"



const Field = () => {
  const data = useStaticQuery(graphql`
query MyQuery {
  wpPage(slug: {eq: "home"}) {
    homePage {
      title
      description
      featuredGames {
        ... on WpGame {
          gameFields {
            title
            picture {
              sourceUrl
            }
          }
        }
      }
    }
  }
}`)
  return <div>
    <div className={styles.desc}>{data.wpPage.homePage.description}</div>
    <br></br>
    <h3 className={styles.title2}>Featured Games</h3>
    {data.wpPage.homePage.featuredGames.map((game, index) => <div><img src={game.gameFields.picture.sourceUrl} alt="" /><p className="home-featured-games" key={index}>{game.gameFields.title}</p></div>)}
  </div>


}

const IndexPage = () => (
  <Layout>
    <Field />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
