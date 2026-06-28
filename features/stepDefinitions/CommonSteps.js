
const { Given } = require("@cucumber/cucumber");
const HomePage = require("../../pages/HomePage");

Given("User opens the application", async function () {
    this.homePage = new HomePage(this.page);
    await this.homePage.openApplication(process.env.BASE_URL);
});