import { BaseUrl } from "../config/config.js";

export class LoginPage{

    constructor(page){
        this.page=page;
        this.userName=page.locator("[name='username']")
        this.password=page.locator("[name='password']")
        this.submit=page.locator("//button")
    }


    async logInActions(usercode,passcode){
        await this.page.goto(BaseUrl)
        await this.userName.fill(usercode);
        await this.password.fill(passcode);
        await this.submit.click();
    }
}