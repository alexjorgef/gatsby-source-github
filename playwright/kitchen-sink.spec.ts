import { test, expect } from "@playwright/test"

test.describe(`Kitchen Sink`, () => {
  test(`should build and serve index page`, async ({ page }) => {
    await page.goto(`/`)

    await expect(page).toHaveTitle(`@alexjorgef/gatsby-source-github`)
  })
  test(`contains elements`, async ({ page }) => {
    await page.goto(`/`)

    await expect(await page.locator(`h1:has-text("@alexjorgef/gatsby-source-github")`)).toBeVisible()
    await expect(await page.locator(`text=Name: website`)).toBeVisible()
    await expect(await page.locator(`text=ID: __github__repository__0`)).toBeVisible()
    await expect(await page.locator(`text=URL: https://github.com/alexjorgef/website`)).toBeVisible()
    await expect(await page.locator(`text=Demo of @alexjorgef/gatsby-source-github – GitHub – Website`)).toBeVisible()
  })
})
