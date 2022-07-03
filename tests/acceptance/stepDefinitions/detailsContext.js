const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion

const url = 'http://localhost:3001/homepage'
const url1 = 'http://localhost:3001/blogdetails'

const { expect } = require("@playwright/test");

//selector
const detailbutton = 'button.btn.btn-info'
const detailpage = 'div.container'






Given('a user has navigated to the homepage and click details button',async function () {
  await page.goto(url);
  });

  When('the user click detail button', async function () {
  await page.click(detailbutton);
  });

  Then('user can view the detail of selected homestay detail',async function () {      
    const locator = await page.locator(detailpage);
    await expect(locator).toBeVisible();
    await page.goto(url1);
  });
