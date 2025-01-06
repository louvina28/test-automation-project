import { $, expect } from '@wdio/globals';
import Page from './page.js';

class WebTrendsLoginPage extends Page {
    get inputEmail() {
        return $('//input[@name="email"]');
    }

    get inputPassword() {
        return $('//input[@name="password"]');
    }

    get btnSubmit() {
        return $('//button[contains(text(),"Login")]');
    }

    get forgetPasswordLink() {
        return $('//a[@class="password-recovery"]');
    }

    get enterEmailaddressforgotpassword() {
        return $('//*[@id="emailInput"]');
    }

    get requestResetLink() {
        return $('//button[@class="submit-button btn btn-default"]');
    }

    get invalidLoginMessage() {
        return $('//div[@class="error-box"]');
    }

    get ssoButton() {
        return $('//a[@href="/login-azure-id"]');
    }

    async webtrendsLogin(email: string, password: string) {
        await this.inputEmail.setValue(email.trim());
        await this.inputPassword.setValue(password.trim());
        await this.btnSubmit.click();
        await browser.pause(10000);
    }

    async verifyInvalidLogin() {
        await expect(this.invalidLoginMessage).toBeExisting();
    }

    async clickForgotPasswordLink() {
        await this.forgetPasswordLink.click();
    }

    async enterEmailaddress(email) {
        await this.enterEmailaddressforgotpassword.setValue(email.trim());
    }

    async clickRequestresetLink() {
        await this.requestResetLink.click();
    }

    async VerifyforgotPasswordDisplayed() {
        await expect(this.enterEmailaddressforgotpassword).toBeExisting();
        await expect(this.requestResetLink).toBeDisplayed();
    }

    async clickSSOButton() {
        await this.ssoButton.click();
    }

    async enterSSOCredentials() {
        // Implement SSO credential logic here (e.g., switching to a new tab or iframe for SSO)
        console.log("SSO credentials entered.");
        await browser.pause(5000);
    }

    open() {
        return super.appOpen('');
    }
}

export default new WebTrendsLoginPage();
