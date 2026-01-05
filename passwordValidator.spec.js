const validatePassword = require("./passwordValidator");

test("le mot de passe doit contenir au moins 8 caractères", () => {
  expect(validatePassword("abc123")).toBe(false);
  expect(validatePassword("abcd1234")).toBe(true);
});
