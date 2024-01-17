# Architecture client / server

> Créer une branche `architecture` depuis la branche `main`.

## Histoire

**1990**:
- CORBA / RMI
> Basé sur des protocoles spécifiques permettant d'invoquer des méthodes à distance

**1994**:
- Netscape

**1999**:
- SOAP
> Basé sur HTTP / XML

**2000**:
- REST (issu de la thèse de Roy Fielding)
> S'appuie sur les standards HTTP, URL, Hypermedia
>
> REST n'est pas un standard, mais une convention

# Exercice 1 : CRUD

## Mise en place

1. Créer un dossier `crud`.
2. Récupérer les fichiers dans le dossier `tp/crud`.

## Ajouter un compte

1. Implémenter la fonction `addAccount` du service : instancier un nouveau compte et appeler la fonction `insertAccount` de la DAO.

2. Implémenter la fonction `insertAccount` de la DAO pour stocker le compte dans la BDD et afficher le contenu de la BDD.

3. Appeler la fonction `addAccount` dans le `client`.

## Lister les comptes

1. Implémenter la fonction `retrieveAccountList` de la DAO pour retourner la liste des comptes **sans la date de création**.

2. Implémenter la fonction `getAccountList` du service pour retourner la listes des comptes depuis la DAO.

3. Appeler la fonction `getAccountList` dans le `client` et afficher le résultat.

## Modifier un compte

1. Implémenter la fonction `saveAccount` du service pour récupérer le compte depuis la DAO, le modifier, et appeler la fonction `updateAccount` de la DAO.

2. Implémenter la fonction `updateAccount` de la DAO pour mettre à jour le compte dans la BDD et afficher le contenu de la BDD.

3. Appeler la fonction `saveAccount` dans le `client`.

## Récupérer un compte

1. Implémenter la fonction `retrieveAccount` de la DAO pour retourner le compte mais **en remplaçant les propriétés `lastName` et `firstName` avec une propriété `name`** (qui est la concaténation du nom et du prénom).

2. Implémenter la fonction `getAccount` du service pour retourner le compte depuis la DAO.

3. Appeler la fonction `getAccount` dans le `client` et afficher le résultat.

# Exercice 2 : CQRS

## Mise en place

1. Créer un dossier `cqrs`.
2. Récupérer les fichiers dans le dossier `tp/cqrs`.

## Répartition `command` / `query`

1. Diviser les services de *l'exercice 1* en 2 groupes et les implémenter soit dans le fichier `accountCommand`, soit dans le fichier `accountQuery`.

2. Implémenter les DAO en conséquences.

> Valider en appelant les différents services dans `client`.

## BDD dédiée aux `query`

1. Créer un fichier `queryDatabase.mjs` et exporter une propriété `accountSummaryList: []`.

2. Modifier la fonction `addAccount` pour ajouter également le compte dans la `queryDatabase` mais **sans la date de création**.

3. Modifier la fonction `saveAccount` pour mettre à jour le compte dans la `queryDatabase` mais **sans la date de création**.

4. Modifier la fonction `retrieveAccountList` pour récupérer les comptes depuis la `queryDatabase`.

## Cache

1. Créer un fichier `cache.mjs` et exporter un objet `accountCache = {}`.

2. Modifier la fonction `addAccount` pour ajouter le compte avec la propriété `name` dans l'objet `accountCache` avec pour clé l'id du compte.

3. Modifier la fonction `saveAccount` pour mettre à jour le compte avec la propriété `name` dans l'objet `accountCache`.

4. Modifier la fonction `retrieveAccount` pour retourner le compte depuis l'objet `accountCache`.

# Exercice 3 : event sourcing

## Mise en place

1. Créer un dossier `eventSourcing`.
2. Copier les fichiers du dossier `cqrs` dans le dossier `eventSourcing`.
3. Créer les fichiers `eventStore.mjs` et `event.mjs`.

## Insérer un évènement

1. Dans le fichier `eventStore`, ajouter une propriété `eventList = []` et implémenter une fonction `addEvent(event)`.

2. Dans le fichier `event`, créer une classe `Event` ayant les propriétés `name`, `accountId`, `payload` et `creationDate`.

3. Modifier la fonction `addAccount` pour ajouter un évènement `accountAdded` avec le compte en *payload*, puis supprimer l'appel à la fonction `insertAccount`.
