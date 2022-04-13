const Page = require("./page");

class ProfilePage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("#userName");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $('button[id="login"]');
  }
  get btnSubmitLogout() {
    return $('button[id="submit"]');
  }

  get inputTitle() {
    return $("#searchBox");
  }

  async searchBook(input) {
    await this.inputTitle.setValue(input);
  }

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  async logout() {
    await this.btnSubmitLogout.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("login");
  }
}

module.exports = new ProfilePage();
