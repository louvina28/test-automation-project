import { $ } from '@wdio/globals';
import Page from './page.js';

/**
 * Sub page containing specific selectors and methods for WebTrends Home Page
 */
class WebTrendsHomePage extends Page {
    // Selectors
    public get loggedInUserInitial() {
        return $('//div[@class="user-initial"]');
    }

    public loggedInUser(username: string) {
        return $(`//p[contains(text(),"${username}")]`);
    }

    public get logOut() {
        return $('//a[@href="/wam/api/logout"]');
    }

    public menuButton(menuName: string) {
        return $(`//button[contains(text(),"${menuName}")]`);
    }

    public get dashboardMenu() {
        return $('//a[@href="/optimize/dashboard"]');
    }

    public get dashboardHeading() {
        return $('//p[@class="dashboard_heading"]');
    }

    // Methods
    public async webtrendsLogout() {
        await this.loggedInUserInitial.click();
        await browser.pause(2000);
        await this.logOut.click();
    }

    public async navigateToMenu(menuName: string) {
        await this.menuButton(menuName).click();
    }

    public async navigateToDashboard() {
        await this.dashboardMenu.click();
    }

    public async verifyDashboard() {
        await expect(this.dashboardHeading).toBeDisplayed();
    }
}

export default new WebTrendsHomePage();
