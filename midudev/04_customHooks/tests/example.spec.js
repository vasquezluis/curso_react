// @ts-check
import { test, expect } from '@playwright/test'
import { JSDOM } from 'jsdom';

const CAT_IMG_BASE = 'https://cataas.com'
const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows a random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const dom = new JSDOM(await page.content());
  const {getByRole} = render(dom.window.document.body);
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_IMG_BASE)).toBeTruthy()
});

