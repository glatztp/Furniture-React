import { expect, test } from "@playwright/test";

test("Navegação de /plan para /summary", async ({ page }) => {
  await page.goto("https://login.microsoftonline.com/");

  await page.fill('input[type="email"]', TEST_EMAIL);
  await page.click('input[type="submit"]');

  await page.waitForSelector('input[type="password"]');
  await page.fill('input[type="password"]', TEST_PASSWORD);
  await page.click('input[type="submit"]');
  await page.goto("http://localhost:4000/new-customers");

  try {
    await page.waitForSelector("text=Planejamento de coleção: AV25", {
      timeout: 15000,
    });
  } catch (error) {
    console.log("Texto não encontrado: Planejamento de coleção: AV25");
    throw error;
  }

  const isTextVisible = await page.isVisible(
    "text=Planejamento de coleção: AV25",
  );
  expect(isTextVisible).toBe(true);
  await page.waitForSelector("text=Planejamento de coleção: AV25", {
    timeout: 5000,
  });

  const isSummaryPageVisible = await page.isVisible(
    "text=Planejamento de coleção: AV25",
  );
  expect(isSummaryPageVisible).toBe(true);
});
