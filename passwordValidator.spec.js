test("le mot de passe doit contenir au moins un chiffre", () => {
  expect(validatePassword("abcdefgh")).toBe(false);
  expect(validatePassword("abcd1234")).toBe(true);
});
