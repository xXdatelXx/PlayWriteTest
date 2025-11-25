"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalaryPage = void 0;
const test_1 = require("@playwright/test");
class SalaryPage {
    constructor(page) {
        this.page = page;
        this.salaryHeader = this.page.locator('h1');
        this.positionFilter = this.page.locator('#position');
        this.automationOption = this.page.locator('//option[contains(text(),"QA Automation")]');
        this.experienceFilter = this.page.locator('#experience');
        this.exp2Option = this.page.locator('//option[@value="2"]');
        this.topMedian = this.page.locator('.salary-summary .median span');
        this.chartMedianPoint = this.page.locator('//div[contains(@class,"ct-point") and contains(@ct:value,"")]');
    }
    async checkPageOpened() {
        await (0, test_1.expect)(this.salaryHeader).toHaveText(/зарплат/i);
    }
    async selectPositionQA() {
        await this.positionFilter.selectOption({ label: 'QA Automation' });
        await (0, test_1.expect)(this.positionFilter).toHaveValue(/automation/i);
    }
    async selectExperience2Years() {
        await this.experienceFilter.selectOption('2');
        await (0, test_1.expect)(this.experienceFilter).toHaveValue('2');
    }
    async getTopMedian() {
        const text = await this.topMedian.textContent();
        return Number(text === null || text === void 0 ? void 0 : text.replace(/\D/g, ''));
    }
    async getChartMedian() {
        const value = await this.chartMedianPoint.first().getAttribute('ct:value');
        return Number(value);
    }
}
exports.SalaryPage = SalaryPage;
