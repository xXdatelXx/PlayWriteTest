"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
exports.default = (0, test_1.defineConfig)({
    testDir: './tests',
    timeout: 60000,
    use: {
        headless: true,
        baseURL: 'https://dou.ua/',
        screenshot: 'only-on-failure',
        video: 'on-first-retry'
    }
});
