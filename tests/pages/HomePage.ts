import { Page, expect } from '@playwright/test';
import config from '../../playwright.config';

export class HomePage {
    constructor(private page: Page) {}

    async open() {
        await this.page.goto('/');
        
        await expect(this.page).toHaveURL(config.use!.baseURL!);
    }

    async goToSalaries() {
        await this.page.locator('header').getByRole('link', { name: 'Зарплати' }).click();
    }
}
