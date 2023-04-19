// @ts-check
import { test, expect } from '@playwright/test'

const CAT_IMG_BASE = 'https://cataas.com'
const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows a random fact and image', async ({ browser }) => {
  const page = await browser.newPage()
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  console.log({text, image});

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')
  

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith('https://cataas.com')).toBeTruthy()
});