import { expect, test } from "@playwright/test";
import fs from "fs";
import os from "os";
import path from "path";

const TEST_EMAIL = "";
const TEST_PASSWORD = "";

test("Export File", async ({ page }) => {
  await page.goto("https://login.microsoftonline.com/");

  await page.fill('input[type="email"]', TEST_EMAIL);
  await page.click('input[type="submit"]');

  await page.waitForSelector('input[type="password"]');
  await page.fill('input[type="password"]', TEST_PASSWORD);
  await page.click('input[type="submit"]');

  await page.goto("http://localhost:4000/plan");
  await page.waitForSelector("text=Planejamento de coleção: Nome PV 2025", {
    timeout: 60000,
  });

  const exportButton = await page.locator('button:has-text("Exportar")');

  await exportButton.waitFor({ state: "visible" });
  const isVisible = await exportButton.isVisible();
  console.log("Botão visível:", isVisible);
  expect(isVisible).toBe(true);

  const downloadPromise = page.waitForEvent("download", { timeout: 60000 });

  await exportButton.click();

  const download = await downloadPromise;

  const fileName = download.suggestedFilename();
  console.log("Nome do arquivo sugerido:", fileName);

  const downloadsFolder = path.join(os.homedir(), "Downloads");
  const filePath = path.join(downloadsFolder, fileName);
  console.log("Caminho completo do arquivo:", filePath);

  // Salvar o arquivo baixado no local especificado
  await download.saveAs(filePath);

  // Verificar se o arquivo existe
  const fileExists = fs.existsSync(filePath);
  console.log("Arquivo existe:", fileExists);
  expect(fileExists).toBe(true);

  const fileExtension = path.extname(filePath);
  console.log("Extensão do arquivo:", fileExtension);
  expect(fileExtension).toBe(".xlsx");

  if (fileExists) {
    fs.unlinkSync(filePath);
    console.log("Arquivo removido após o teste.");
  }
});
