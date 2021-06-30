$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/addcustomerpage.feature");
formatter.feature({
  "line": 1,
  "name": "xyz bank test",
  "description": "As a user I want to all bank functionality",
  "id": "xyz-bank-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5927441100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify that Bank manager should add customer successfully",
  "description": "",
  "id": "xyz-bank-test;verify-that-bank-manager-should-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    },
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on xyz bank homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on bank manager Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I add new customer account",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should add customer successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BankStepDefs.iAmOnXyzBankHomepage()"
});
formatter.result({
  "duration": 353957800,
  "status": "passed"
});
formatter.match({
  "location": "BankStepDefs.iClickOnBankManagerLoginButton()"
});
formatter.result({
  "duration": 388999200,
  "status": "passed"
});
formatter.match({
  "location": "BankStepDefs.iAddNewCustomerAccount()"
});
formatter.result({
  "duration": 1406750900,
  "status": "passed"
});
formatter.match({
  "location": "BankStepDefs.iShouldAddCustomerSuccessfully()"
});
formatter.result({
  "duration": 77742900,
  "status": "passed"
});
formatter.after({
  "duration": 1538856500,
  "status": "passed"
});
formatter.before({
  "duration": 3600629100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify that Bank manager should open account successfully",
  "description": "",
  "id": "xyz-bank-test;verify-that-bank-manager-should-open-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Sanity"
    },
    {
      "line": 9,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I have added a customer successfully",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on open account button by navigating on Home page under Bank managers login",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on process button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should be able to open account successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BankStepDefs.iHaveAddedACustomerSuccessfully()"
});
formatter.result({
  "duration": 2156076100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepDefs.iClickOnOpenAccountButtonByNavigatingOnHomePageUnderBankManagersLogin()"
});
formatter.result({
  "duration": 3188372600,
  "status": "passed"
});
formatter.match({
  "location": "BankStepDefs.iClickOnProcessButton()"
});
formatter.result({
  "duration": 123019000,
  "status": "passed"
});
formatter.match({
  "location": "BankStepDefs.iShouldBeAbleToOpenAccountSuccessfully()"
});
formatter.result({
  "duration": 13787600,
  "status": "passed"
});
formatter.after({
  "duration": 1038940100,
  "status": "passed"
});
formatter.before({
  "duration": 3096333900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify that customer should login and logout successfully",
  "description": "",
  "id": "xyz-bank-test;verify-that-customer-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I have added a customer successfully",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on customer login button by navigating on Home page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I login using registered customer login details",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click on logout button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should be able to logout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BankStepDefs.iHaveAddedACustomerSuccessfully()"
});
formatter.result({
  "duration": 2194706700,
  "status": "passed"
});
formatter.match({
  "location": "BankStepDefs.iClickOnCustomerLoginButtonByNavigatingOnHomePage()"
});
formatter.result({
  "duration": 265671500,
  "status": "passed"
});
formatter.match({
  "location": "BankStepDefs.iLoginUsingRegisteredCustomerLoginDetails()"
});
formatter.result({
  "duration": 1666835100,
  "status": "passed"
});
formatter.match({
  "location": "BankStepDefs.iShouldBeAbleToLoginSuccessfully()"
});
formatter.result({
  "duration": 22088500,
  "status": "passed"
});
formatter.match({
  "location": "BankStepDefs.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 73463500,
  "status": "passed"
});
formatter.match({
  "location": "BankStepDefs.iShouldBeAbleToLogoutSuccessfully()"
});
formatter.result({
  "duration": 27265600,
  "status": "passed"
});
formatter.after({
  "duration": 1373130100,
  "status": "passed"
});
formatter.before({
  "duration": 3060422000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "verify that customer should be able to deposit money successfully",
  "description": "",
  "id": "xyz-bank-test;verify-that-customer-should-be-able-to-deposit-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I have a valid bank account",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I logged in using valid customer details",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I deposit \"100\" money by navigating on deposit tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I should be able to deposit money successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BankStepDefs.iHaveAValidBankAccount()"
});
formatter.result({
  "duration": 5404092500,
  "status": "passed"
});
formatter.match({
  "location": "BankStepDefs.iLoggedInUsingValidCustomerDetails()"
});
formatter.result({
  "duration": 1942893800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 11
    }
  ],
  "location": "BankStepDefs.iDepositMoneyByNavigatingOnDepositTab(String)"
});
formatter.result({
  "duration": 601349400,
  "status": "passed"
});
formatter.match({
  "location": "BankStepDefs.iShouldBeAbleToDepositMoneySuccessfully()"
});
formatter.result({
  "duration": 68289400,
  "status": "passed"
});
formatter.after({
  "duration": 1299965500,
  "status": "passed"
});
formatter.before({
  "duration": 2974613900,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify that customer should be able to withdraw money successfully",
  "description": "",
  "id": "xyz-bank-test;verify-that-customer-should-be-able-to-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I have a valid bank account",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I logged in using valid customer details",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I deposit \"100\" money by navigating on deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I withdraw \"50\" money",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I should be able to withdraw money successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BankStepDefs.iHaveAValidBankAccount()"
});
formatter.result({
  "duration": 5552623000,
  "status": "passed"
});
formatter.match({
  "location": "BankStepDefs.iLoggedInUsingValidCustomerDetails()"
});
formatter.result({
  "duration": 2169273800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 11
    }
  ],
  "location": "BankStepDefs.iDepositMoneyByNavigatingOnDepositTab(String)"
});
formatter.result({
  "duration": 567725100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 12
    }
  ],
  "location": "BankStepDefs.iWithdrawMoney(String)"
});
formatter.result({
  "duration": 2087223900,
  "status": "passed"
});
formatter.match({
  "location": "BankStepDefs.iShouldBeAbleToWithdrawMoneySuccessfully()"
});
formatter.result({
  "duration": 52631900,
  "status": "passed"
});
formatter.after({
  "duration": 998755100,
  "status": "passed"
});
});