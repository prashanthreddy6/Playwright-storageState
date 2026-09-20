import {expect, chromium} from '@playwright/test';
import {LoginPage} from '../PageObjects/LoginPage.js';
import {userDetails} from '../config/config.js';
//

export default async function globalSetup() {

  let browser=await chromium.launch();
  let page=await browser.newPage();
  
  
  let user=userDetails.userName;
  let pass=userDetails.password;
  console.log(user,pass);
  console.log("MAIN page");
  
  const login=new LoginPage(page);
  await login.logInActions(user,pass);
  
  
  await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  await page.context().storageState({path:'playwright/.auth/user.json'});

  await browser.close();
  
}
  


  


