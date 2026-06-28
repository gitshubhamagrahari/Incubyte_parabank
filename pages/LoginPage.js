const { expect } = require("@playwright/test");

class loginPage{


    constructor(page) {

     this.page= page;

        // locator

        this.usernameInput = this.page.locator("input[name='username']");
        this.passwordInput= this.page.locator("input[name='password']");
        this.loginButton = page.locator("input[value='Log In']");
        this.logoutLink = this.page.locator("text=Log Out");

    }


    async login(username,password){

        await this.usernameInput.fill(username);
       await  this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    async isLoginSuccessful() {
      await expect(this.logoutLink).toBeVisible();
    //  await expect(this.page).toHaveURL(/overview\.htm/);
}





}

module.exports =loginPage;



