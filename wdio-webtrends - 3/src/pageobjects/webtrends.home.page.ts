import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class WebTrendsHomePage extends Page {
    public loggedInUserInitial() {
        return $('//div[@class="user-initial"]');
    }

    public loggedInUser(username: string) {
        return $('//p[contains(text(),"'+username+'")]');
    }
    
    public get logOut() {
        return $('//a[@href="/wam/api/logout"]');
    }

    public async navigateToMenu(menuname: string){
        return $('//button[contains(text(),"'+menuname+'")]').click();
    }
    
    public async webtrendsLogout(){
        await this.loggedInUserInitial().click();
        await browser.pause(2000);
        await this.logOut.click();
        await browser.reloadSession();
    }
}

export default new WebTrendsHomePage();