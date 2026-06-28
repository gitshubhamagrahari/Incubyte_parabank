 const { expect } = require("@playwright/test");

 class RegisterPage {


    constructor(page) {

        this.page=page;

       this.firstNameInput=   page.locator("input[id='customer.firstName']");
       this.lastNameInput =   page.locator("input[id='customer.lastName']");
       this.addressInput  =   page.locator("input[name='customer.address.street']");
       this.cityInput     =   page.locator("input[id='customer.address.city']") ;
       this.stateInput = page.locator("input[id='customer.address.state']");
       this.zipCodeInput  =   page.locator("input[id='customer.address.zipCode']");
        this.phoneNumberInput  =  page.locator("#customer\\.phoneNumber");
       this.ssnInput  =   page.locator("#customer\\.ssn");
       this.usernameInput  =   page.locator("#customer\\.username");
       this.passwordInput  =   page.locator("#customer\\.password");
       this.confirmPasswordInput  =   page.locator("#repeatedPassword");
       this.registerButton  =  page.locator('input[value="Register"]');
       this.logoutLink = this.page.locator("text=Log Out");

    }

      async registerUser (user){

        await this.firstNameInput.fill(user.firstName);
        await this.lastNameInput.fill(user.lastName);
        await this.addressInput.fill(user.address);
        await this.cityInput.fill(user.city);
        await this.stateInput.fill(user.state)
        await  this.zipCodeInput.fill(user.zipCode);
        await this.phoneNumberInput.fill(user.phone);
        await this.ssnInput.fill(user.ssn);
        await this.usernameInput.fill(user.username);
        await this.passwordInput.fill(user.password);
        await this.confirmPasswordInput.fill(user.password);
        await this.registerButton.click();

 console.log(await this.page.url());
      }



      async isRegistrationSuccessful() {
          await expect(this.logoutLink).toBeVisible();
       }
 
       
   }

module.exports = RegisterPage;