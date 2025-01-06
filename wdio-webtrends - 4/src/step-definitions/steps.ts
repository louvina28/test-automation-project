import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import WebTrendsLoginPage from '../pageobjects/webtrends.login.page.js';
import WebTrendsHomePage from '../pageobjects/webtrends.home.page.js';
import webtrendsLoginPage from '../pageobjects/webtrends.login.page.js';
import webtrendsForgetpasswordPage from '../pageobjects/webtrends.forgetpassword.page.js';

Given('I am on the webtrends website home page', async () => {
    await WebTrendsLoginPage.open();
});

Given('I launch the URL', async () => {
    await WebTrendsLoginPage.appLaunch('/');
    await browser.maximizeWindow()

});

When(/^I login with webtrends (.*), (.*), (.*)/, async (username, password,type) => {
    await WebTrendsLoginPage.webtrendsLogin(username, password,type);
});

Then(/^I should see username logged in (.*)/, async (username) => {
    await expect(WebTrendsHomePage.loggedInUser(username)).toBeExisting();
});

Then('Logout from application',async() =>{
    await WebTrendsHomePage.webtrendsLogout();
})

Then('I should not able to login',async() =>{
    await expect(webtrendsLoginPage.invalidLoginErrorMsg()).toBeExisting();
})


Then(/^I Navigate to (.*)/,async(menuname) =>{
    await WebTrendsHomePage.navigateToMenu(menuname);
})

Then(/^I login with webtrends (.*), (.*), (.*)/, async (username, password,type) => {
    await WebTrendsLoginPage.webtrendsLogin(username, password,type);
});

Then(/^I check for forgetpassword (.*)/,async(email) =>{
    await webtrendsForgetpasswordPage.webtrendsForgetPassword(email);
})

