const { test, expect } = require("@playwright/test");

const BASE_URL = "https://gymlog-react-spa-1.vercel.app";

test("Homepage loads correctly", async ({ page }) => {
  await page.goto(BASE_URL);

  await expect(page).toHaveTitle(/GymLog/i);
  await expect(page.locator("body")).toBeVisible();
});

test("User can navigate to About page", async ({ page }) => {
  await page.goto(BASE_URL);

  await page.locator('a[href="/about"]').click();

  await expect(page).toHaveURL(/\/about$/);
  await expect(page.locator("body")).toBeVisible();
});

test("Add page loads correctly", async ({ page }) => {
  await page.goto(`${BASE_URL}/add`);

  await expect(page).toHaveURL(/\/add$/);
  await expect(page.locator("body")).toBeVisible();
});

test("User can navigate through pages full flow", async ({ page }) => {
  await page.goto(BASE_URL);

  await page.locator('a[href="/add"]').click();
  await expect(page).toHaveURL(/\/add$/);

  await page.locator('a[href="/about"]').click();
  await expect(page).toHaveURL(/\/about$/);

  await page.locator('a[href="/"]').first().click();
  await expect(page).toHaveURL(BASE_URL + "/");
});

test("Add page UI elements are visible", async ({ page }) => {
  await page.goto(`${BASE_URL}/add`);

  await expect(page).toHaveURL(/\/add$/);
  await expect(page.locator("body")).toBeVisible();

  const bodyText = await page.locator("body").innerText();
  expect(bodyText.length).toBeGreaterThan(0);
});

test("API responds successfully", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts",
  );

  expect(response.status()).toBe(200);

  const data = await response.json();
  expect(Array.isArray(data)).toBeTruthy();
  expect(data.length).toBeGreaterThan(0);
});
