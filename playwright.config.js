// playwright.config.js
const { defineConfig } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
  timeout: 30000,

  use: {
    baseURL: process.env.BASE_URL,
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry'
  }
});