# Cypress Test Suite for Loyalty Program Web Application

This repository contains the Cypress test suite for the Loyalty Program web application. This suite includes tests for user login, dashboard functionality, and other key features.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Test Cases](#test-cases)
- [Page Objects](#page-objects)
- [Environment Variables](#environment-variables)
- [XPath Plugin](#xpath-plugin)
- [Test Data](#test-data)
- [Reporting](#reporting)
- [Contributing](#contributing)

## Prerequisites

Before running the tests, ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Cypress](https://www.cypress.io/) (check installation instructions below)
- A web browser (Chrome, Firefox, Edge, Safari)

## Installation

1.  Clone the repository to your local machine:

    
    git clone <repository_url>
    

2.  Navigate to the project directory:

    
    cd <project_directory>
    

3.  Install the project dependencies:

    
    npm install
    

4.  Install the required Cypress plugins:
     
    npm install cypress-xpath --save-dev
    npm install cypress-image-snapshot --save-dev
    npm install webpack --save-dev
    

## Configuration

1.  **`cypress.config.js`:** The main configuration file for the project, including the `baseUrl` configuration. You can find it at the root of the project:
    *   **`baseUrl`:** Is set to `https://loyalty.monri.ba`

2.   **`cypress/support/e2e.js`**: This file contains the setup for the plugin, and it should have the line `require('@cypress/xpath');` if you are using XPath selectors.

3.  **`cypress.env.json`:**
    * This file is used to configure the environment variables, which include the user email and the password that should be used for the tests.
    * Create the file inside the `cypress` directory and include your email and password following this format:
    ```json
      {
        "cypress_user_email": "your_email",
        "cypress_user_password": "your_password"
       }
    ```

## Running Tests

1.  Open Cypress:

    ```bash
    npx cypress open
    ```

2.  Select the desired test file from the Cypress Test Runner, and then start the test execution.

## Project Structure

cypress/
├── e2e/
│ ├── login.cy.js # Test file (for login)
│ ├── pointsBalance.cy.js # Test file (for points balance)
│
├── support/
│ ├── commands.js # Custom Cypress commands (if needed)
│ ├── e2e.js # Plugin configurations
│
├── pages/
│ ├── loginPage.js # Login Page Object
│ ├── homePage.js # HomePage Object
│ ├── dashboardPage.js # Dashboard Page Object
│
cypress.config.js # Cypress configuration file
cypress.env.json # environment variables
.gitignore # to ignore the env file

-   **`cypress/e2e`:** Contains your test files (`.cy.js`).
-   **`cypress/support`:** Contains the files required to configure cypress, and the plugins.
-   **`cypress/pages`:** Contains the page object classes (`.js`).
-   **`cypress.config.js`**: The main configuration file for your Cypress project.
-   **`cypress.env.json`**: The file used to store the environment variables for your tests.
-   **`.gitignore`:** The file used to ignore the `.env` from git commits.

## Test Cases

-   **`e2e/login.cy.js`:** Contains test cases related to the user login functionality. It tests that the user is redirected to the correct page after a successful login, and that the user profile is properly shown in the homepage.
-   **`e2e/dashboard.cy.js`:** Contains test cases related to the dashboard functionality, verifying if the points balance and the transaction history are being correctly shown on the dashboard.

## Page Objects

-   **`pages/loginPage.js`:** Contains the locators and actions specific to the login page. It is used to perform the login process on both the `login.cy.js` and `dashboard.cy.js` files.
-    **`pages/homePage.js`:** Contains the locators and actions specific to the home page. It is used to verify that the user is being redirected to the home page, and that the user email is properly displayed.
-   **`pages/dashboardPage.js`:** Contains the locators and actions specific to the dashboard page. It is used to perform the checks for the balance and transactions in the `dashboard.cy.js` file.

## Environment Variables

* The `cypress.env.json` file, stored at the `cypress/cypress.env.json`, contains the user credentials used to log in to the application during testing.
*  The `cypress.env.json` file contains the following variables:
    *   `cypress_user_email`: Used for storing the username or the email address used for login.
    *   `cypress_user_password`: Used for storing the password of the user.

## XPath Plugin

* The project uses the `@cypress/xpath` plugin to support XPath selectors. This plugin is enabled in the `cypress/support/e2e.js` file, by including the line `require('@cypress/xpath');`.
* This plugin allows the use of `cy.xpath()` in the tests.
* The plugin should be installed with `npm install cypress-xpath --save-dev`

## Test Data

- The test data is configured in the `cypress.env.json` file.
- You can also configure the test data within your tests by using JavaScript variables.

## Reporting

*  After the test execution, Cypress will automatically generate a report with the results, and it can also integrate with other reporting systems if necessary.

## Contributing

If you want to contribute to this project, make sure you are following these guidelines:

1. Create a branch for the feature or the bug that you will be working on.
2. Create tests for your code.
3. Make sure that your code follows the best practices.
4. Commit your code, and add the comments to the commit.
5. Create a pull request.
6. Make sure that you are communicating with other members of the team.
