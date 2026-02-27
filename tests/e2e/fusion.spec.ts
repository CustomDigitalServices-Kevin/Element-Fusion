import { test, expect } from '@playwright/test'

test.describe('Element Fusion - Gameplay', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each test
    await page.goto('http://localhost:3000')
    await page.evaluate(() => localStorage.clear())
    await page.reload()
  })

  test('should load and display base elements', async ({ page }) => {
    await page.goto('http://localhost:3000')

    // Wait for loading to complete
    await page.waitForSelector('[aria-label*="Eau"]', { timeout: 10000 })

    // Check all 4 base elements are visible
    await expect(page.locator('[aria-label*="Eau"]').first()).toBeVisible()
    await expect(page.locator('[aria-label*="Feu"]').first()).toBeVisible()
    await expect(page.locator('[aria-label*="Terre"]').first()).toBeVisible()
    await expect(page.locator('[aria-label*="Air"]').first()).toBeVisible()
  })

  test('should show progress bar', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.waitForSelector('[aria-label*="Eau"]', { timeout: 10000 })

    // Progress bar should be visible
    const progressText = page.locator('text=/\\d+\\/\\d+/')
    await expect(progressText.first()).toBeVisible()
  })

  test('should have working hint button', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.waitForSelector('[aria-label="Indice"]', { timeout: 10000 })

    const hintButton = page.locator('[aria-label="Indice"]')
    await expect(hintButton).toBeVisible()
    await hintButton.click()
  })

  test('should open encyclopedia', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.waitForSelector('[aria-label="Encyclopédie"]', { timeout: 10000 })

    await page.locator('[aria-label="Encyclopédie"]').click()
    await expect(page.locator('text=Encyclopédie')).toBeVisible()
  })
})
