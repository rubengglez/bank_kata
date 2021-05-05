const assert = require('assert');
const { Given, When, Then, Before } = require('@cucumber/cucumber');
const AccountService = require('../../dist/index').default

let accountService;

Before(function () {
  accountService = new AccountService()
})

Given('a client makes a deposit of {int} on {int}-{int}-{int}', function (amount, day, month, year) {
  accountService.deposit(amount)
});

Given('a deposit of {int} on {int}-{int}-{int}', function (amount, day, month, year) {
  accountService.deposit(amount)
});

Given('a withdrawal of {int} on {int}-{int}-{int}', function (amount, day, month, year) {
  accountService.withdraw(amount)
});

When('they print their bank statement', function () {
  accountService.printStatement()
});

Then('they would see all movements by date:', function (dataTable) {
  return 'pending'
});