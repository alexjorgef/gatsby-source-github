import "dotenv/config"
import type { GatsbyConfig, PluginRef } from "gatsby"
import type { GithubPluginOptions } from "@alexjorgef/gatsby-source-github"

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `@alexjorgef/gatsby-source-github`,
    siteUrl: `https://github.com/alexjorgef/gatsby-source-github/`,
  },
  jsxRuntime: `automatic`,
  graphqlTypegen: {
    generateOnBuild: true,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@alexjorgef/gatsby-source-github`,
      options: {
        apiUrl: `https://api.github.com/graphql`,
        accessToken: process.env.ACCESS_TOKEN,
        queries: [
          `{
            repository(owner: "alexjorgef", name: "website") {
              url
              name
              stargazerCount
              owner {
                login
                avatarUrl
                url
              }
              issues(last: 20, states: OPEN) {
                edges {
                  node {
                    id
                    author {
                      avatarUrl
                      login
                      url
                    }
                    bodyHTML
                    title
                    url
                  }
                }
              }
            }
          }`,
        ],
      } as GithubPluginOptions,
    },
  ] as PluginRef[],
}

export default config
