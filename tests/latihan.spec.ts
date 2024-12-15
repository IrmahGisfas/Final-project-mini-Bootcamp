import { test, expect } from '@playwright/test';

test("User are able to navigate to homepage", async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/"); 
    await expect(page.getByLabel('store logo')).toBeVisible();
    await expect(page.getByText('Home Page')).toBeVisible();
})

test("User are able to navigate to the mens tops product", async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/"); 
    await expect(page.getByLabel('store logo')).toBeVisible();

    await page.locator("//span[contains(text(), 'Men')]").click();
    await expect(page.locator("//h1/span")).toHaveText("Men");
})
