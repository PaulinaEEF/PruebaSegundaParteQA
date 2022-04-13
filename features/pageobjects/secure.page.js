const Page = require('./page');

class SecurePage extends Page {
 
  get flashAlert() {
    return $("#name");
  }

  get searchedBook() {
    return $(".action-buttons");
    
  }
}

module.exports = new SecurePage();
