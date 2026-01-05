test("getBalance retourne le solde", () => {
  bankDAO.retrieveBalance.mockReturnValue(200);

  const balance = bank.getBalance("ACC1");

  expect(balance).toBe(200);
});
