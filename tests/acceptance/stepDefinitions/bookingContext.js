const {Given, When, Then} = require('@cucumber/cucumber')
const { BookingPage } = require('../pages/bookingPage');

// import expect for assertion

const url = 'http://localhost:3001/booking'
const url2 = 'http://localhost:3001/homepage'
const { expect } = require("@playwright/test");


const bookingPage = new BookingPage()




Given('a user has navigated to booking page', async function () {
    await page.goto(url);
  });

When('the user click Booknow button and fill the booking form and click the Book Your stay button', async function () {
    await bookingPage.fillDetails()
  });

Then('the booking sucessful must be displayed', async function () {
    await page.goto(url2);
    // const sucesslocator = await page.locator(successSelector);
    // await expect(sucesslocator).toBeVisible();

    
  });