import { Given, When, Then,  } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';

import WebTrendsLoginPage from '../pageobjects/webtrends.login.page.js';
import WebTrendsHomePage from '../pageobjects/webtrends.home.page.js';


Given('I am on the webtrends website home page', async () => {
    await WebTrendsLoginPage.open();
});

When(/^I login with webtrends (.*), (.*)/, async (email, password) => {
    await WebTrendsLoginPage.webtrendsLogin(email, password);
});

Then(/^I should see the user logged in successfully with (.*)/, async (username) => {
    await expect(WebTrendsHomePage.loggedInUser(username)).toBeExisting();
});

Then('I should not be able to login to the application', async () => {
    await WebTrendsLoginPage.verifyInvalidLogin();
});

When('I click on the Forgot password link', async () => {
    await WebTrendsLoginPage.clickForgotPasswordLink();
});

When(/^I will enter my email address (.*)$/, async (email) => {
    await WebTrendsLoginPage.enterEmailaddress(email);
});

When('I will click on the Request reset link', async () => {
    await WebTrendsLoginPage.clickRequestresetLink();
});

Then('I should see a confirmation message for the reset link', async () => {
    await WebTrendsLoginPage.VerifyforgotPasswordDisplayed();
});

When('I click on "Sign in with SSO"', async () => {
    await WebTrendsLoginPage.clickSSOButton();
});

When('I enter my valid credentials on the SSO page', async () => {
    await WebTrendsLoginPage.enterSSOCredentials();
});

//Then('I should be redirected to the application\'s home page', async () => {
//    await WebTrendsHomePage.verifyHomePage();
//});

Then('Logout from application', async () => {
    await WebTrendsHomePage.webtrendsLogout();
});

Then(/^I Navigate to (.*)/, async (menuname) => {
    await WebTrendsHomePage.navigateToMenu(menuname);
});

When('I click on the dashboard menu', async () => {
    await WebTrendsHomePage.navigateToDashboard();
});

Then('I verify the dashboard name is displayed correctly', async () => {
    await WebTrendsHomePage.verifyDashboard();
});
