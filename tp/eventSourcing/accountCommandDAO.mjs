import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";

export const accountCommandDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log("Contenu de la BDD :", ACCOUNT_LIST);

    const { creationDate, ...accountSummary } = account;
    accountSummaryList.push(accountSummary);

    const { lastName, firstName, ...rest } = account;
    accountCache[account.id] = { ...rest, name: `${firstName} ${lastName}` };
  },
  updateAccount(account) {
    const index = ACCOUNT_LIST.findIndex(a => a.id === account.id);
    if (index !== -1) {
      ACCOUNT_LIST[index] = { ...account, creationDate: ACCOUNT_LIST[index].creationDate };
      console.log("Contenu de la BDD après mise à jour :", ACCOUNT_LIST);
      const queryIndex = accountSummaryList.findIndex(a => a.id === account.id);
      if (queryIndex !== -1) {
        const { creationDate, ...accountSummary } = account;
        accountSummaryList[queryIndex] = accountSummary;
      }

      const { lastName, firstName, ...rest } = account;
      accountCache[account.id] = { ...rest, name: `${firstName} ${lastName}` };
    
    } else {
      console.log(`Compte avec l'ID ${account.id} non trouvé.`);
    }
  },
};
