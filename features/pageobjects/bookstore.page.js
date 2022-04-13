const Page = require("./page");


class BookstorePage extends Page {

  get inputTitle() {
    return $("#searchBox");
  }

  async searchBook(input) {
    await this.inputTitle.setValue(input);
  }

  open() {
    return super.open("books");
  }
}

module.exports = new BookstorePage();
