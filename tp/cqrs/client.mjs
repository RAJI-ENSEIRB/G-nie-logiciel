import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";


accountCommand.addAccount("RAJI", "Oussama");
accountCommand.addAccount("RAJ", "mohamed");
accountCommand.addAccount("Durand", "alice");

const accountList = accountQuery.getAccountList();
console.log("\nListe des comptes :", accountList);

// Récupérer l'ID du deuxième compte
const secondAccountId = accountList[1].id;
accountCommand.saveAccount(secondAccountId, "ALI", "anas");

const updatedAccountList = accountQuery.getAccountList();
console.log("\nListe des comptes après mise à jour :", updatedAccountList);
