function validatePassword(password) {
  if (password.length < 8) return false;
  if (!/[0-9]/.test(password)) return false;
  if (!/[a-zA-Z]/.test(password)) return false;
  return true;
}

module.exports = validatePassword;
