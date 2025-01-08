class HomePage {
    constructor() {
        this.baseUrl = Cypress.config('baseUrl'); // Base URL of the app
        this.homePagePath = '/home'; // Home page path
        this.userProfileEmail = '//div[@id="user-profile-email"]'; // XPath selector for an element containing the user's email in the profile
    }

    verifyUrl(){
        cy.url().should('include', this.homePagePath);
    }

    verifyUserProfileEmail() {
        cy.xpath(this.userProfileEmail)
          .should('be.visible')
            .should('contain', Cypress.env('cypress_user_email'));
    }
  }
  export default HomePage;

