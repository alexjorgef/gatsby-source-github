/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import { graphql } from "gatsby"
import * as React from "react"

const GithubRepoLists = ({ repo }) => (
  <React.Fragment key={repo.name}>
    <h2>{repo.name}</h2>
    <div className="img-grid">
      <figure key={repo.name} style={{ width: 150, height: 150 }}>
        <img loading="lazy" alt={repo.name} src={repo.owner.avatarUrl} />
      </figure>
    </div>
    <p>Name: {repo.name}</p>
    <p>ID: {repo.id}</p>
    <p>URL: {repo.url}</p>
    <p>Stars: {repo.stargazerCount}</p>
  </React.Fragment>
)

const IndexPage = ({ data: { allGithubRepository } }: { data: Queries.IndexPageQuery }) => (
  <div className="wrapper">
    <main>
      <h1>@alexjorgef/gatsby-source-github</h1>
      <p>
        The user has <b>{allGithubRepository.totalCount}</b> repos on GitHub
      </p>
      {allGithubRepository.edges &&
        (allGithubRepository.edges.length > 0 ? (
          allGithubRepository.edges.map((r) => {
            const repo = r.node
            if (!repo.name) return null
            return <GithubRepoLists repo={repo} />
          })
        ) : (
          <p>No playlists found</p>
        ))}
    </main>
    <footer>
      Demo of @alexjorgef/gatsby-source-github –{` `}
      <a href="https://www.github.com/alexjorgef/gatsby-source-github">GitHub</a>
      {` `}– <a href="https://www.alexjorgef.com">Website</a>
    </footer>
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexPage {
    allGithubRepository {
      totalCount
      edges {
        node {
          id
          url
          name
          stargazerCount
          owner {
            login
            avatarUrl
            url
          }
          issues {
            edges {
              node {
                id
                title
                url
              }
            }
          }
        }
      }
    }
  }
`

export const Head = () => (
  <>
    <title>@alexjorgef/gatsby-source-github</title>
    <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🎨</text></svg>"
    />
  </>
)
