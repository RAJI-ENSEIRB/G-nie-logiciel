const eventList = [];

export function addEvent(event) {
    eventList.push(event);
}



export function getAccountFromEvents(accountId) {
      
      const accountEvents = eventList.filter(e => e.accountId === accountId);

      if (accountEvents.length === 0) {
          return null;  
      }

      
      let account = null;

      accountEvents.forEach(event => {
          if (event.name === 'accountAdded') {
              
              account = {
                  id: event.payload.id,
                  lastName: event.payload.lastName,
                  firstName: event.payload.firstName,
                  creationDate: event.payload.creationDate
              };
          }
          else if (event.name === 'accountUpdated') {
              
              if (account) {
                  account.lastName = event.payload.lastName;
                  account.firstName = event.payload.firstName;
              }
          }
      });

      return account;
  }
