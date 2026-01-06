import { accountService } from "./accountService.mjs";


accountService.addAccount("RAJI", "Oussama");
accountService.addAccount("RAJ", "mohamed");
accountService.addAccount("Durand", "alice");

const accountList = accountService.getAccountList();
console.log("Liste des comptes :", accountList);

const secondAccountId = accountList[1].id;
accountService.saveAccount(secondAccountId, "ALI", "anas");

const updatedAccountList = accountService.getAccountList();
console.log("Liste des comptes après mise à jour :", updatedAccountList);


const retrievedAccount = accountService.getAccount(secondAccountId);
console.log("Compte récupéré :", retrievedAccount);