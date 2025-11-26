import { Page, expect } from '@playwright/test';

export class SalaryPage {
    constructor(private page: Page) { }

    async selectFilter(): Promise<string> {
        // Select specialization
        await this.page.getByRole('button', { name: 'Software Engineering & Architecture' }).click();
        await this.page.locator('li.item', { hasText: 'QA & QC' }).click();
        await this.page.locator('#selector-position').getByText('Усі спеціалізації').click();

        // Select fillter
        await this.page.getByRole('button', { name: 'Фільтри' }).click();
        await this.page.getByText('Automation QA', { exact: true }).click();

        return await this.page.locator('#queries').innerText();
    }

    async selectExperience2Years(): Promise<string> {
        await this.page.goto(this.page.url() + '&experience=2-10');
        this.page.getByRole('button').filter({ hasText: 'button-filters' });

        return await this.page.locator('#queries').innerText();
    }

    async medianFromBlock(): Promise<number> {
        return Number((await this.page.locator('#dws-ch-numbers #median .value')
            .innerText())
            .trim()
            .replace(/[$,\s]/g, ''));
    }

    async medianFromGraph(): Promise<number> {
        return Number((await this.page.locator('svg #tm-point text.tm-ref-value')
            .textContent())!
            .trim()
            .replace(/[$,\s]/g, ''));
    }
}
