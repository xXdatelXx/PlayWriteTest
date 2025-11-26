import { Page, expect } from '@playwright/test';

export class HomePage {
    constructor(private page: Page) { }

    async open() {
        await this.page.goto('/');
    }

    async goToSalaries() {
        await this.page.locator('header')
            .getByRole('link', { name: 'Зарплати' })
            .click();
    }
}
