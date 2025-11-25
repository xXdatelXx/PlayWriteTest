import { test } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { SalaryPage } from './pages/SalaryPage';

test.describe('QA Automation Salary Checks', () => {

  test('Open home page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.open();
  });

  test('Navigate to salary page', async ({ page }) => {
    const homePage = new HomePage(page);
    const salaryPage = new SalaryPage(page);

    await homePage.open();
    await homePage.goToSalaries();
    await salaryPage.checkPageOpened();
  });

  test('Select experience: 2 years', async ({ page }) => {
    const homePage = new HomePage(page);
    const salaryPage = new SalaryPage(page);

    await homePage.open();
    await homePage.goToSalaries();
    await salaryPage.selectFilter();
    await salaryPage.selectExperience2Years();
  });

  test('Compare median salaries', async ({ page }) => {
    const homePage = new HomePage(page);
    const salaryPage = new SalaryPage(page);

    await homePage.open();
    await homePage.goToSalaries();
    await salaryPage.selectFilter();
    await salaryPage.compareMedians();
  });
});
