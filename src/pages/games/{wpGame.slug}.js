import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import * as styles from "../../components/index.module.css"

const Game = () => {
    const data =useStaticQuery (graphql`query GameQueryBySlug($slug :String) {
        wpGame(slug: {eq: $slug}) {
          gameFields {
            title
            description
            picture {
              sourceUrl
            }
            price
            rating1
            rating2
            rating3
            releaseDate
            reviewer1
            reviewer2
            reviewer3
            soldCopies
            developers
            earnings
            allTimePeakPlayers
          }
        }
      }`)
      return <div>
        <img src={data.wpGame.gameFields.picture.sourceUrl}></img>
      <h1>{data.wpGame.gameFields.title}</h1>
      <p>By: {data.wpGame.gameFields.developers}</p>
      {data.wpGame.gameFields.description}
      <p>Prijs: {data.wpGame.gameFields.price}</p>
      <p>All-Time peak players: {data.wpGame.gameFields.allTimePeakPlayers}</p>
      <h2>Reviews</h2>
      <p>{data.wpGame.gameFields.reviewer1}: {data.wpGame.gameFields.rating1}</p>
      <p>{data.wpGame.gameFields.reviewer2}: {data.wpGame.gameFields.rating2}</p>
      <p>{data.wpGame.gameFields.reviewer3}: {data.wpGame.gameFields.rating3}</p>
      <p>Sold copies: {data.wpGame.gameFields.soldCopies}</p>
      <p>Total earnings: {data.wpGame.gameFields.earnings}</p>
      </div>
}


const Page = () => (
    <Layout>
        <Game/>
        <p></p>
    </Layout>
)

export const Head = () => <Seo title="Game" />
export default Page