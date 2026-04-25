# @alexjorgef/gatsby-source-github

Source playlists from [GitHub](https://www.github.com/) into [Gatsby](https://www.gatsbyjs.com/) (based on [DSchau/gatsby-source-github](https://github.com/DSchau/gatsby-source-github)).

## Install

```shell
npm install @alexjorgef/gatsby-source-github
```

## How to use

Add the plugin to your `gatsby-config` file:

```js:title=gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@alexjorgef/gatsby-source-github`,
      options: {}
    }
  ]
}
```

## Plugin Options

- [@alexjorgef/gatsby-source-github](#alexjorgefgatsby-source-github)
  - [Install](#install)
  - [How to use](#how-to-use)
  - [Plugin Options](#plugin-options)
    - [accessToken (**required**)](#accesstoken-required)
    - [queries (**required**)](#queries-required)
    - [apiUrl (optional)](#apiurl-optional)

### accessToken (**required**)

The GitHub API access token used for authentication.

**Field type**: `string`

```js
{
  resolve: `@alexjorgef/gatsby-source-github`,
  options: {
    accessToken: `ghp_xxxxxxxxxxxxxxxxxxxxx`,
  },
}
```

### queries (**required**)

List of search queries to execute against the GitHub API.

**Field type**: `string[]`

```js
{
  resolve: `@alexjorgef/gatsby-source-github`,
  options: {
    queries: [
      `{
        repository(owner: "torvalds", name: "linux") {
          name
          url
        }
      }`,
      `{
        repository(owner: "gatsbyjs", name: "gatsby") {
          name
          url
          stargazerCount
        }
      }`,
    ]
  },
}
```

### apiUrl (optional)

The GitHub API URL to use.

**Field type**: `string`

```js
{
  resolve: `@alexjorgef/gatsby-source-github`,
  options: {
    apiUrl: `https://api.github.com/graphql`,
  },
}
```
