import { test, expect } from '@playwright/test';

test.describe('Website automation tests', () => {

  test('Join button redirects to sign-up page', async ({ page }) => {
    await page.goto('https://s4e.io/');
    const joinButton = page.getByRole('button', { name: 'Join' });
    await expect(joinButton).toBeVisible();
    await joinButton.click();
    await expect(page).toHaveURL(/sign-up/);
  });

  test('Pricing page monthly/yearly switch is active', async ({ page }) => {
    await page.goto('https://s4e.io/pricing');
    const monthlySwitch = page.locator('text=Pay monthly').nth(0);
    const yearlySwitch = page.locator('text=Pay yearly').nth(0);
    await expect(monthlySwitch).toBeVisible();
    await expect(yearlySwitch).toBeVisible();
    await expect(monthlySwitch).toBeEnabled();
    await expect(yearlySwitch).toBeEnabled();
  });

  test('Plan wizard button opens planning popup', async ({ page }) => {
    await page.goto('https://s4e.io/pricing');
    await page.click('text=Plan wizard');
    const popup = page.locator('role=dialog');
    await expect(popup).toBeVisible();
  });

  test('CTEM Features area is visible', async ({ page }) => {
    await page.goto('https://s4e.io/');
    const featuresArea = page.locator('.slick-slider.slick-initialized').nth(0);
    await expect(featuresArea).toBeVisible();
  });

  test('Check out more resources - view buttons are visible with slider', async ({ page }) => {
    await page.goto('https://s4e.io/');
    const carouselItems = page.locator('.slick-slider.slick-initialized').nth(1);
    const slider = page.locator('.slick-dots').nth(1);
    for (let i = 0; i <= 9; i++) {
      const pageNumber = Math.ceil((i + 1) / 3);
      await slider.locator(`text=${pageNumber}`).click();
      const item = carouselItems.locator(`[data-index="${i}"]`);
      const viewButton = item.locator('[role="button"]:has-text("View")');
      await expect(viewButton).toBeVisible({ timeout: 10000 });
    }
  });

  test('Start trial and See the plans are visible', async ({ page }) => {
    await page.goto('https://s4e.io/');
    await expect(page.locator('text=Start trial')).toBeVisible();
    await expect(page.locator('text=See the plans')).toBeVisible();
  });

  test('Start trial button redirects to sign-up page', async ({ page }) => {
    await page.goto('https://s4e.io/');
    await page.click('text=Start trial');
    await expect(page).toHaveURL(/sign-up/);
  });

  test('See the plans button redirects to pricing page', async ({ page }) => {
    await page.goto('https://s4e.io/');
    await page.click('text=See the plans');
    await expect(page).toHaveURL(/pricing/);
  });

  test('Footer URLs are visible', async ({ page }) => {
    await page.goto('https://s4e.io/');
    await expect(page.locator('footer a[href="/"]')).toBeVisible(); 
    await expect(page.locator('footer a[href="https://www.linkedin.com/company/s4e-io"]')).toBeVisible(); 
    await expect(page.locator('footer a[href="https://twitter.com/secforeveryone"]')).toBeVisible();
  });

  test('AI-based solution request receives a reply', async ({ page }) => {
    await page.goto('https://s4e.io/features/ai-based-solutions');
    await page.click('text=Get AI Solution');
    const reply = page.locator('#AI_BASED');
    await expect(reply).toBeVisible();
    await expect(reply).toHaveText(/TCP/, { timeout: 30000 });
  });

});
