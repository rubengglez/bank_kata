const sinon = require('sinon');
const chai = require("chai");
const sinonChai = require("sinon-chai");
chai.should();

chai.use(sinonChai);
const { Given, When, Then, Before } = require('@cucumber/cucumber');
const AccountService = require('../../dist/index').default
const MockDate = require('mockdate')

let accountService;
let outputService;

Before(function () {
  outputService = sinon.spy({ print: () => {} })
  accountService = new AccountService(outputService)
})

Given('a client makes a deposit of {int} on {int}-{int}-{int}', function (amount, day, month, year) {
  MockDate.set(`${year}-${month}-${day}`)
  accountService.deposit(amount)
});

Given('a deposit of {int} on {int}-{int}-{int}', function (amount, day, month, year) {
  MockDate.set(`${year}-${month}-${day}`)
  accountService.deposit(amount)
});

Given('a withdrawal of {int} on {int}-{int}-{int}', function (amount, day, month, year) {
  MockDate.set(`${year}-${month}-${day}`)
  accountService.withdraw(amount)
});

When('they print their bank statement', function () {
  accountService.printStatement()
});

Then('they would see all movements by date:', function (dataTable) {
  let expected = '';
  dataTable.raw().forEach(row => {
    expected += `${row}\n`;
  })

  outputService.print.should.have.been.calledWith(expected);
});