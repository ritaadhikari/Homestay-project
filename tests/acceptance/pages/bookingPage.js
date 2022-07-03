const { expect } = require('@playwright/test')

class BookingPage {
    constructor() {

        
        //locators

    
        this.name = '#bookingname';
        this.email ='#id';
        this.contact = '#contact';
        this.noOfPeople = '#noOfPeople';
        this.checkIn ='#checkIn';
        this.checkOut = '#checkOut';
        this.submit = 'button.btn.btn-success';
        this.successSelector = "div.alert.alert-success"

    }

    

    async fillDetails() {
        await page.fill(this.name, "rita");
        await page.fill(this.email,"ritaadhikari@gmail.com");
        await page.fill(this.contact, "98000000");
        await page.fill(this.noOfPeople, "3");
        await page.type(this.checkIn, "07/09/2022");
        await page.type(this.checkOut,"07/09/2022");
        await page.click(this.submit);
      
    }

   
}


module.exports = { BookingPage };