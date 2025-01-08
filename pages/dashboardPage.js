class DashboardPage {
    constructor() {
      this.baseUrl = Cypress.config('baseUrl'); // Base URL of the app
      this.dashboardPath = '/dashboard'; // User dashboard path
      this.pointsBalance = '.points-balance'; // Class for the total points balance element
      this.pointsTransaction = '.transaction-record'; // Class for all the transaction records
    }
  
    visit() {
      cy.visit(this.baseUrl + this.dashboardPath);
    }
  
    verifyTransactions() {
      cy.get(this.pointsTransaction).should('have.length.at.least', 3);
    }
  
    verifyPointsBalance(initialBalance, pointsFromTransactions) {
      const expectedBalance = initialBalance + (pointsFromTransactions * 3);
      cy.get(this.pointsBalance)
        .should('be.visible')
        .should('contain', expectedBalance);
    }
  }
  export default DashboardPage;