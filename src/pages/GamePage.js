import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const Games = () => {
    const data = useStaticQuery(graphql`
    query GamesQuery {
  allWpGame {
    nodes {
      gameFields {
        title
        picture {
          sourceUrl
        }
      }
      slug
    }
  }
}`)
    return <div className={styles.maindiv}>
        {data.allWpGame.nodes.map((game,i)=><Link to={"../games/"+game.slug} key={i}>
            <img src={game.gameFields.picture.sourceUrl}></img>
            <p>{game.gameFields.title}</p>
        </Link>)}
        
    </div>
}

const GamePage = () => (

    <Layout>
        <Games />
    </Layout>
)

export const Head = () => <Seo title="Games" />

export default GamePage