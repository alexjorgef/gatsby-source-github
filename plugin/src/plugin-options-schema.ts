import type { GatsbyNode } from "gatsby"
import type { ObjectSchema } from "gatsby-plugin-utils"

const wrapOptions = (innerOptions: string) => `{
  resolve: \`@alexjorgef/gatsby-source-github\`,
  options: {
    ${innerOptions.trim()}
  },
}
`

export const pluginOptionsSchema: GatsbyNode["pluginOptionsSchema"] = ({ Joi }): ObjectSchema =>
  Joi.object({
    apiUrl: Joi.string()
      .description(`The GitHub API URL.`)
      .meta({ example: wrapOptions(`apiUrl: \`https://api.github.com/graphql\`,`) })
      .default(`https://api.github.com/graphql`),
    accessToken: Joi.string()
      .required()
      .description(`The GitHub API access token used for authentication.`)
      .meta({
        example: wrapOptions(`accessToken: \`ghp_xxxxxxxxxxxxxxxxxxxxx\`,`),
      }),
    queries: Joi.array()
      .items(Joi.string())
      .required()
      .description(`List of search queries to execute against the GitHub API.`)
      .meta({
        example: wrapOptions(`queries: ["repo:openai/gpt-4", "user:octocat"],`),
      }),
  })
