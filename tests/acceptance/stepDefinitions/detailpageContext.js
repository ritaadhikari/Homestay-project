const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion

//launch url
const url = 'http://localhost:3001/blogdetails'
const url2 = 'http://localhost:3001/booking'
const { expect } = require("@playwright/test");

//selectors
const detailsPageElement = 'div.navbar-nav'
const serviceList = 'ul.list-group';
const homeInfo = 'div.card-deck'
const bookStay = 'button.btn.btn-success';
const cancelHomestay = 'button.btn.btn-danger';



 Given('a user has navigated to detailpage',async function () {
    //homepage
    await page.goto(url);
    //locate the content of blog detailspage
    const locator = await page.locator(detailsPageElement)
    const servicelocator = await page.locator(serviceList)
    const listLocator = await page.locator(homeInfo)
    // assert that it's visible
    await expect(locator).toBeVisible()
    await expect(servicelocator).toBeVisible()
    await expect(listLocator).toBeVisible()

  });

  When('the user click detail button to book the stay',async function () {       
    await page.click(bookStay);
  });

  Then('user can view the given homestay will be booked', async function() {
    await page.goto(url2);
  });