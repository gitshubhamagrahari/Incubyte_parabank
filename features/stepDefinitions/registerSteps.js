const {Given , When, Then} = require("@cucumber/cucumber");
const HomePage = require ("../../pages/HomePage");
const RegisterPage = require ("../../pages/RegisterPage");
const TestData = require("../../utils/TestData");
const { expect } = require("@playwright/test");
require("dotenv").config();



// Given("User opens the application", async function(){

//     this.homePage = new HomePage(this.page);

//     await this.homePage.openApplication(process.env.BASE_URL);
// })

When("User navigate to Register page" , async function(){

    await this.homePage.clickRegister();

})

When("User enter valid registration details", async function(){

     this.user = TestData.getRegistrationUser();

    this.registerPage = new RegisterPage(this.page);

    await this.registerPage.registerUser(this.user);


})

Then("User should be registered successfully", async function () {
    await this.registerPage.isRegistrationSuccessful();
});