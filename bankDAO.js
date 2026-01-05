const bankDAO = {
  retrieveBalance(accountId) {
    console.log("Retrieve balance", accountId);
    return 100;
  }
};

module.exports = bankDAO;
