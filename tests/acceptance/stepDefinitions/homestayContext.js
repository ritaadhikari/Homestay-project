const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion

const url = 'http://localhost:3001/homepage'
const { expect } = require("@playwright/test");


Given('a user has navigated to the homepage',  async function() {
    await page.goto(url);
  });

  Then('user can view homestay details', async function () {
    await page.goto(url);
  });
