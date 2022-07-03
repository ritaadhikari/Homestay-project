const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion

const url = 'http://localhost:3001/blogdetails'
const url2 = 'http://localhost:3001/homepage'
const { expect } = require("@playwright/test");


//selector
const cancelHomestay = 'button.btn.btn-danger';



Given('a user has navigated to detailpage and didn\'t like the homestay',async function () {
    await page.goto(url);
  });

 When('the user click cancel to book the stay', async function () {
    await page.click(cancelHomestay);
  });


  Then('user can view the homepage again',async function () {
    await page.goto(url2)
  });