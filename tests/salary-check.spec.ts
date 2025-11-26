import { test, expect } from '@playwright/test';
import config from '../playwright.config';
import { HomePage } from './pages/HomePage';
import { SalaryPage } from './pages/SalaryPage';

test('QA Automation Salary full flow', async ({ page }) => {
  const homePage = new HomePage(page);
  const salaryPage = new SalaryPage(page);

  // Open home and assert base URL
  await homePage.open();
  expect(page.url()).toBe(config.use!.baseURL);

  // Navigate to salaries and assert page opened
  await homePage.goToSalaries();
  expect(page.url()).toMatch(/salaries/);

  // Select filter and assert query contains Automation QA
  const queriesAfterFilter = await salaryPage.selectFilter();
  expect(queriesAfterFilter).toContain('Automation QA');

  // Select experience 2 years and assert queries contain experience text
  const queriesAfterExp = await salaryPage.selectExperience2Years();
  expect(queriesAfterExp).toContain('2 роки — 10 і більше років');

  // Compare medians
  const mediansFromGraph = await salaryPage.medianFromGraph();
  const medianFromBlock = await salaryPage.medianFromBlock();

  expect(medianFromBlock).toBeGreaterThanOrEqual(0);
  expect(mediansFromGraph).toBeGreaterThanOrEqual(0);
  expect(medianFromBlock).toEqual(mediansFromGraph);
});