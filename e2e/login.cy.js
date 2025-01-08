import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';

const loginPage = new LoginPage();
const homePage = new HomePage();
const userEmail = Cypress.env('cypress_user_email');
const userPassword = Cypress.env('cypress_user_password');

describe('Loyalty Program - Login Functionality', () => {
  
  it('Verify Successful Login', () => {
    // 1. Login
    loginPage.login(userEmail, userPassword);

    // 2. Verify that you have logged in successfully and are redirected to the homepage.
    homePage.verifyUrl();

    // 3. Verify that the user's email is displayed on the page
    homePage.verifyUserProfileEmail();
  });
});