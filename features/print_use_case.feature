Feature: is the movements in the account printed properly?
  If someone adds money or extract money from his account,
  he should be able to see how much money has in the bank

  Scenario: Print properly movements in bank account
    Given a client makes a deposit of 1000 on 10-01-2012
    And a deposit of 2000 on 13-01-2012
    And a withdrawal of 500 on 14-01-2012
    When they print their bank statement
    Then they would see all movements by date:
      | Date        | Amount | Balance         |
      | 14/01/2012  | -500   | 2500            |
      | 13/01/2012  | 2000   | 3000            |
      | 10/01/2012  | 1000   | 1000            |
