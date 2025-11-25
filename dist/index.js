"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const HomePage_1 = require("./pages/HomePage");
const SalaryPage_1 = require("./pages/SalaryPage");
(0, test_1.test)('Перевірка медіани заробітних плат QA Automation', async ({ page }) => {
    const home = new HomePage_1.HomePage(page);
    const salary = new SalaryPage_1.SalaryPage(page);
    // 1. Відкрити головну сторінку
    await home.open();
    // 2. Перейти на сторінку "Зарплати"
    await home.goToSalaries();
    await salary.checkPageOpened();
    // 3. Обрати фільтр "QA automation"
    await salary.selectPositionQA();
    // 4. Обрати фільтр "від 2 років"
    await salary.selectExperience2Years();
    // 5. Порівняти медіану у верхньому блоці та на графіку
    const medianTop = await salary.getTopMedian();
    const medianChart = await salary.getChartMedian();
    (0, test_1.expect)(medianTop).toBe(medianChart);
});
