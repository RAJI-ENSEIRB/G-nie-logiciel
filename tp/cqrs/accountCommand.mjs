import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";


export const accountCommand = {
    addAccount(lastName, firstName) {
    const account = new Account(null, lastName, firstName);
    accountCommandDAO.insertAccount(account);
    },
    saveAccount(id, lastName, firstName) {

      const account = new Account(id, lastName, firstName);
      accountCommandDAO.updateAccount(account);
    },
};
