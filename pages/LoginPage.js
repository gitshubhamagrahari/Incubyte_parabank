const { expect } = require("@playwright/test");

class loginPage{


    constructor(page) {

     this.page= page;

        // locator

        this.usernameInput = this.page.locator("input[name='username']");
        this.passwordInput= this.page.locator("input[name='password']");
        this.loginButton = page.locator("input[value='Log In']");
        this.logoutLink = this.page.locator("text=Log Out");
       
        this.totalAmount =this.page.locator("//td[normalize-space()='Total']/following-sibling::td/b");

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
      
     async printAvailableBalance(){ 

    const balance = await this.totalAmount.textContent();
     //expect(balance).not.toBeNull();

    console.log("Total Balance :", balance);

    return balance;
}
     




}

module.exports =loginPage;



