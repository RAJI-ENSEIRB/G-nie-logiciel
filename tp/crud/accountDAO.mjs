import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log("Contenu de la BDD :", ACCOUNT_LIST);
  },
  retrieveAccountList() {
    return ACCOUNT_LIST.map(({creationDate, ...account}) => account);
  },
  updateAccount(account) {
    const index = ACCOUNT_LIST.findIndex(a => a.id === account.id);
    if (index !== -1) {
      ACCOUNT_LIST[index] = { ...account, creationDate: ACCOUNT_LIST[index].creationDate };
      console.log("Contenu de la BDD après mise à jour :", ACCOUNT_LIST);
    } else {
      console.log(`Compte avec l'ID ${account.id} non trouvé.`);
    }
  },
  retrieveAccount(id) {
    const account = ACCOUNT_LIST.find(a => a.id === id);
    if (account) {
      const { lastName, firstName, ...rest } = account;
      return { ...rest, name: `${firstName} ${lastName}` };
    }
    return null;
  },
};
