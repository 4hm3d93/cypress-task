import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const userEmail = Cypress.env('cypress_user_email'); 
const userPassword = Cypress.env('cypress_user_password');
const initialBalance = 1234; // Initial user points balance
const pointsFromTransactions = 5; // points from the last transactions

describe('Loyalty Program - Reward Points Functionality', () => {

  it('Verify Points Balance and Transaction Records', () => {
    // 1. Login
    loginPage.login(userEmail, userPassword);

    // 2. Navigate to the dashboard.
    dashboardPage.visit();

    // 3. Verify that there are transactions present on the dashboard.
    dashboardPage.verifyTransactions();

    // 4. Verify that the points balance is correct.
    dashboardPage.verifyPointsBalance(initialBalance, pointsFromTransactions);
  });
});