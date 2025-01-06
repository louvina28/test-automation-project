import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class WebTrendsLoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    public async appLaunch(url:string){
        return await browser.url(url)
    }

    public get ssoButton () {
        return $('//a[@href="/login-azure-id"]');
    }
    public get inputSSOUsername () {
        return $('//input[@name="loginfmt"]');
    }

    public get inputSSOPassword () {
        return $('//input[@name="passwd"]');
    }

    public get btnSSOSubmit () {
        return $('//input[@data-report-value="Submit"]');
    }

    public get inputEmail () {
        return $('//input[@name="email"]');
    }

    public get inputPassword () {
        return $('//input[@name="password"]');
    }

    public get btnSubmit () {
        return $('//button[contains(text(),"Login")]');
    }

    public loggedInUser (username: string) {
        return $('//p[contains(text(),"'+username+'")]');
    }

    public invalidLoginErrorMsg () {
        return $('//label[contains(text(),"Incorrect email or password")]');
    }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async webtrendsLogin (email: string, password: string,type : string) {
        if(type == "sso"){
            await browser.pause(2000);
            await this.ssoButton.click();
            
            await this.inputSSOUsername.setValue(email);
            await this.btnSSOSubmit.click();
            await browser.pause(2000);

            await this.inputSSOPassword.setValue(password);
            await this.btnSSOSubmit.click();        
            await browser.pause(2000);

            await this.btnSSOSubmit.click();
            await browser.pause(2000);
        } 
        else{
            await this.inputEmail.setValue(email);
            await this.inputPassword.setValue(password);
            await this.btnSubmit.click();
            await browser.pause(2000);
        }
    }
}

export default new WebTrendsLoginPage();