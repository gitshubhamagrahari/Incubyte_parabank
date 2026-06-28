  const {Given, When, Then} = require("@cucumber/cucumber");
  const HomePage = require("../../pages/HomePage");
  const  LoginPage = require("../../pages/LoginPage");
  const TestDate = require("../../utils/TestData");



// Given("User opens the application", async function(){

//   this.homePage = new HomePage(this.page);
//   await this.homePage.openApplication(process.env.BASE_URL);

// })

When("User logs in with registered credentials", async function(){

    const user =TestDate.getLoginUser();
    this.loginPage  =new LoginPage(this.page);

    await this.loginPage.login(
    user.username,
    user.password
    );
      
})

Then("User should be logged in successfully", async function(){

await this.loginPage.isLoginSuccessful();
})