import { accountService } from "./accountService.mjs";


accountService.addAccount("RAJI", "Oussama");
accountService.addAccount("RAJ", "mohamed");
accountService.addAccount("Durand", "alice");

const accountList = accountService.getAccountList();
console.log("Liste des comptes :", accountList);