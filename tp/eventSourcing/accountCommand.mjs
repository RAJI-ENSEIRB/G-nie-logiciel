import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { addEvent } from "./eventStore.mjs";
import { Event } from "./event.mjs";


export const accountCommand = {
    addAccount(lastName, firstName) {
    const account = new Account(null, lastName, firstName);
    


    const event = new Event("accountAdded", account.id, {lastName, firstName}, new Date());
    addEvent(event);

    },
    saveAccount(id, lastName, firstName) {
          
          const event = new Event("accountUpdated", id, {lastName, firstName}, new Date());
          addEvent(event);

          
          const existingAccount = ACCOUNT_LIST.find(a => a.id === id);

          if (existingAccount) {
              
              existingAccount.lastName = lastName;
              existingAccount.firstName = firstName;

              
              const summaryAccount = accountSummaryList.find(a => a.id === id);
              if (summaryAccount) {
                  summaryAccount.lastName = lastName;
                  summaryAccount.firstName = firstName;
              }

              
              accountCache[id] = {
                  id: id,
                  name: `${firstName} ${lastName}`
              };
          } else {
              console.log(`Compte avec l'ID ${id} non trouvé.`);
          }
      }
  };

