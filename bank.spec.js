jest.mock("./bankDAO");

const bankDAO = require("./bankDAO");
const bank = require("./bank");

test("getBalance appelle retrieveBalance", () => {
  bank.getBalance();
  expect(bankDAO.retrieveBalance).toHaveBeenCalled();
});
