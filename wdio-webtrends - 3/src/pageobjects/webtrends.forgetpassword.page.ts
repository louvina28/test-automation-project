import { $ } from '@wdio/globals'
import Page from './page.js';

class WebTrendsForgetPasswordPage extends Page {
   

    public get forgetPasswordButton () {
        return $('//a[@class="password-recovery"]');
    }
    
    public get email () {
        return $('//input[@name="email"]');
    }

    public get requestButton () {
        return $('//button[text()="Request reset link"]');
    }
    
    public async webtrendsForgetPassword (email: string) {
            await this.forgetPasswordButton.click();
            await expect(this.email).toBeDisplayed();
            await this.email.setValue(email);
            await this.requestButton.click();
    }

}

export default new WebTrendsForgetPasswordPage();