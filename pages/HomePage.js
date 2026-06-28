class HomePage{

 constructor(page){

    this.page =page;
    this.registerLink   = page.locator("text=Register");
 }
  
  async openApplication(baseURL){

    await this.page.goto(baseURL);
  }
  
    async clickRegister(){
   await this.registerLink.click();


  }

  

}
module.exports = HomePage;
