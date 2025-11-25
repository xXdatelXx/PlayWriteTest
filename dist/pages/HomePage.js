"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const test_1 = require("@playwright/test");
class HomePage {
    constructor(page) {
        this.page = page;
    }
    async open() {
        await this.page.goto('/');
        await (0, test_1.expect)(this.page).toHaveTitle(/DOU/);
    }
    async goToSalaries() {
        await this.page.getByRole('link', { name: 'Зарплати' }).click();
    }
}
exports.HomePage = HomePage;
