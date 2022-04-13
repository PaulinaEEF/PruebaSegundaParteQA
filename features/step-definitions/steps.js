const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const BookstorePage = require('../pageobjects/bookstore.page');
const ProfilePage = require('../pageobjects/profile.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage,
    bookstore: BookstorePage,
    profile: ProfilePage
}

//login steps

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});


//bookstore steps

When(/^I write the book with the title (.*)$/, async (searchBox) => {
  await BookstorePage.searchBook(searchBox);
});

Then(/^I should see on the screen a book with the title (.*)$/, async (title) => {
  await expect(SecurePage.searchedBook).toHaveTextContaining(title);
});


//profile steps

Given(/^I am on the (\w+) page after I login with (.*) and (.+)$/, async (page, username, password) => {
  await pages[page].open();
  await ProfilePage.login(username, password);
});

When(/^I search a book with the title (.*)$/, async (searchBox) => {
  await ProfilePage.searchBook(searchBox);
});

Then(/^I should see on the screen the book (.*)$/, async (title) => {
  await expect(SecurePage.searchedBook).toHaveTextContaining(title);
  await ProfilePage.logout();
});