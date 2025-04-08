import { expect, test } from "@playwright/test";

test("Navegação de /plan para /summary", async ({ page }) => {
  await page.goto("https://login.microsoftonline.com/");

  await page.fill('input[type="email"]', TEST_EMAIL);
  await page.click('input[type="submit"]');

  await page.waitForSelector('input[type="password"]');
  await page.fill('input[type="password"]', TEST_PASSWORD);
  await page.click('input[type="submit"]');
  await page.goto("http://localhost:4000/plan");

  await page.waitForSelector("text=Planejamento de coleção: Nome PV 2025", {
    timeout: 120000,
  });

  const isPlanPageVisible = await page.isVisible(
    "text=Planejamento de coleção: Nome PV 2025",
  );
  expect(isPlanPageVisible).toBe(true);

  await page.goto("http://localhost:4000/summary");

  await page.waitForSelector("text=Receita", { timeout: 5000 });

  const isSummaryPageVisible = await page.isVisible("text=Receita");
  expect(isSummaryPageVisible).toBe(true);
});
