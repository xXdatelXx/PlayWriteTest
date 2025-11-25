import { Page, expect } from '@playwright/test';

export class SalaryPage {
    constructor(private page: Page) {}

    async checkPageOpened() {
        await expect(this.page).toHaveURL(/salaries/)
    }

    async selectFilter() {
        // Select specialization        
        await this.page.locator('#dd-position .dd-button').waitFor({ state: 'visible' });
        await this.page.click('#dd-position .dd-button');
        await this.page.locator('li.item', { hasText: 'QA & QC' }).click();
        await this.page.locator('#selector-position').getByText('Усі спеціалізації').click();
        
        // Select fillter
        await this.page.getByRole('button', { name: 'Фільтри' }).click();
        await this.page.getByText('Automation QA', { exact: true }).click();
        
        await expect(this.page.locator('#queries')).toContainText('Automation QA');
    }

    async selectExperience2Years() {
        await this.page.goto(this.page.url() + '&experience=2-10');
        await this.page.getByRole('button').filter({ hasText: 'button-filters' });
        
        await expect(this.page.locator('#queries')).toContainText('2 роки — 10 і більше років');
    }

    async compareMedians() {
        const first = await this.page.locator('#dws-ch-numbers #median .value').innerText();
        const second = await this.page.locator('svg #tm-point text.tm-ref-value').textContent();

        expect(first).toBe(second?.trim());
    }
}
