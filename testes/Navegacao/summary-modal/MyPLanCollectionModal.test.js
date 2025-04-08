import { expect, test } from "@playwright/test";

test("Navegação de /plan para /summary", async ({ page }) => {
  await page.goto("https://login.microsoftonline.com/");

  await page.fill('input[type="email"]', TEST_EMAIL);
  await page.click('input[type="submit"]');

  await page.waitForSelector('input[type="password"]');
  await page.fill('input[type="password"]', TEST_PASSWORD);
  await page.click('input[type="submit"]');
  await page.goto("http://localhost:4000");

  await page.isVisible("text=Planejamento de coleção: AV25");

  await page.goto("http://localhost:4000/summary");
  await page.waitForSelector("text=Planejamento de coleção: Nome PV 2025", {
    timeout: 10000,
  });
  const isSummaryTextVisible = await page.isVisible(
    "text=Planejamento de coleção: Nome PV 2025",
  );
  expect(isSummaryTextVisible).toBe(true);

  await page.click("text=Meu planejamento de coleção");

  await page.waitForSelector("text=Planejamento de coleção: Nome PV 2025", {
    timeout: 10000,
  });
  await page.isVisible("text=Planejamento de coleção: Nome PV 2025");

  expect(page.url()).toBe("http://localhost:4000/summary/plan-metrics");
});
