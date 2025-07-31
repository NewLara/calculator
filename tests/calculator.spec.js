const { test, expect } = require('@playwright/test');

test.describe('Adventures Squared Travel Website', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the homepage', async ({ page }) => {
    // Check main elements are present
    await expect(page.locator('h1')).toContainText('Adventures Squared Travel');
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('#calculator')).toBeVisible();
  });

  test('should navigate to calculator section', async ({ page }) => {
    // Click calculator link in navigation
    await page.click('a[href="#calculator"]');
    
    // Check we're in calculator section
    await expect(page.locator('#calculator h2')).toContainText('Cruise Drink Package Calculator');
  });

  test('should test calculator functionality', async ({ page }) => {
    // Navigate to calculator
    await page.goto('/#calculator');
    
    // Test cruise length selection
    await page.selectOption('#cruiseLength', '7');
    await expect(page.locator('#cruiseLength')).toHaveValue('7');
    
    // Test discount input
    await page.fill('#packageDiscount', '40');
    await expect(page.locator('#packageDiscount')).toHaveValue('40');
    
    // Test drink quantity inputs
    await page.fill('#drink-water', '5');
    await page.fill('#drink-coffee', '3');
    await page.fill('#drink-beer', '4');
    
    // Verify calculations update
    await expect(page.locator('#paygoTotalCost')).not.toHaveText('$0.00');
    await expect(page.locator('#classicTotalCost')).not.toHaveText('$0.00');
    await expect(page.locator('#premiumTotalCost')).not.toHaveText('$0.00');
  });

  test('should test group calculator', async ({ page }) => {
    await page.goto('/#calculator');
    
    // Add people to group calculator
    await page.fill('#groupClassicNum', '2');
    await page.fill('#groupPremiumNum', '1');
    
    // Verify group totals update
    await expect(page.locator('#groupClassicSubtotal')).not.toHaveText('$0.00');
    await expect(page.locator('#groupPremiumSubtotal')).not.toHaveText('$0.00');
    await expect(page.locator('#groupTotalCost')).not.toHaveText('$0.00');
  });

  test('should test responsive design', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('#calculator')).toBeVisible();
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('#calculator')).toBeVisible();
  });

  test('should test external links', async ({ page }) => {
    // Test YouTube link
    const youtubeLink = page.locator('a[href*="youtube.com/@AdventuresSquaredTravel"]');
    await expect(youtubeLink).toBeVisible();
    
    // Test GitHub link
    const githubLink = page.locator('a[href*="github.com/NewLara/calculator"]');
    await expect(githubLink).toBeVisible();
  });

  test('should test blog section', async ({ page }) => {
    await page.goto('/#blog');
    
    // Check blog posts are present
    await expect(page.locator('.blog-card')).toHaveCount(4);
    await expect(page.locator('h2')).toContainText('Latest Travel Tips & Cruise News');
  });

  test('should test affiliate disclosure', async ({ page }) => {
    // Check affiliate disclosure is present
    await expect(page.locator('text=*Affiliate link')).toBeVisible();
    await expect(page.locator('text=*Some links on this page are affiliate links')).toBeVisible();
  });
}); 