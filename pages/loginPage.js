class LoginPage {
    constructor() {
      this.baseUrl = Cypress.config('baseUrl'); // Base URL of the app
      this.loginPagePath = '/login'; // Login path
      this.emailInputField = '#email'; // ID of the email input field
      this.passwordInputField = '#password'; // ID of the password input field
      this.loginButton = '#login-button'; // ID of the login button
    }
  
    visit() {
      cy.visit(this.baseUrl + this.loginPagePath);
    }
  
    typeEmail(userEmail) {
      cy.get(this.emailInputField).type(userEmail);
    }
  
    typePassword(userPassword) {
      cy.get(this.passwordInputField).type(userPassword);
    }
  
    clickLoginButton() {
      cy.get(this.loginButton).click();
    }
    
      login(userEmail, userPassword) {
          this.visit();
          this.typeEmail(userEmail);
          this.typePassword(userPassword);
          this.clickLoginButton();
      }
  }
  export default LoginPage;