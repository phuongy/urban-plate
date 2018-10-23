import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Home } from '../templates/home'

export const PageHead = () => (
  <Helmet>
    <meta http-equiv='X-UA-Compatible' content='IE=edge;chrome=1' />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Urban Plate</title>
    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
    <link rel="manifest" href="/images/favicon/site.webmanifest" />
    <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#424242" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="description" content="Helmet application" />
    <meta property="og:type" content="article" />
    <style type="text/css">{`
        *,
        *:before,
        *:after {
            box-sizing: border-box;
        }

        body {
          background-color: #FFFFFF;
          color: #000;
          font-family: -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          padding: 0;
          margin: 0;
        }

        h1 {
          font-size: 44px;
          font-weight: 900;
          letter-spacing: 2px;
          line-height: 40px;
        }

        h2 {
          font-size: 18px;
          line-height: 24px;
          font-weight: 400;
        }

        p, p:before, p:after {
          font-size: 14px;
          line-height: 20px;
          margin: 0
          padding: 0
        }

        @media screen and (min-width: 400px) {
          h1 {
            font-size: calc(44px + 44 * ((100vw - 400px) / 600));
            line-height: calc(40px + 45 * ((100vw - 400px) / 600));
          }

          h2 {
            font-size: calc(18px + 14 * ((100vw - 400px) / 600));
            line-height: calc(24px + 12 * ((100vw - 400px) / 600));
          }

          p {
            font-size: calc(14px + 8 * ((100vw - 400px) / 600));
            line-height: calc(20px + 8 * ((100vw - 400px) / 600));
          }
        }

        @media screen and (min-width: 1000px) {
          h1 {
            font-size: 88px;
            line-height: 85px;
          }

          h2 {
            font-size: 32px;
            line-height: 36px;
          }

          p {
            font-size: 22px;
            line-height: 28px;
          }
        }

        a {
          font-weight: 600;
          text-decoration: none;
          color: #000000;
        }

        nav a {
          font-weight: 600;
          padding-left: 20px;
          display: inline-flex;
          flex-direction: column;
          position: relative;
        }

       
      `}</style>
  </Helmet>
)

const Layout = ({ data }) => {
  const recipes = data.allContentfulRecipe.edges.map(x => x.node);
  return (
    <>
      <Home recipes={recipes} />
    </>
  )
}

export default Layout

// query

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulRecipe {
      edges {
        node {
          id
          title
          subtext
          slug
          accent
          accentAlt
          image {
            fixed {
              src
            }
          }
        }
      }
    }
  }
`;
