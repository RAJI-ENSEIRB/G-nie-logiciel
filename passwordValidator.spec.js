test("mot de passe invalide sans lettre", () => {
  expect(validatePassword("12345678")).toBe(false);
});
