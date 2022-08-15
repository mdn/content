---
title: IDBFactory
slug: Web/API/IDBFactory
page-type: web-api-interface
tags:
  - API
  - HTTP
  - IndexedDB
  - Interface
  - Offline
  - Reference
  - Storage
browser-compat: api.IDBFactory
---
{{APIRef("IndexedDB")}}

The **`IDBFactory`** interface of the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) lets applications asynchronously access the indexed databases. The object that implements the interface is `window.indexedDB`. You open — that is, create and access — and delete a database with this object, and not directly with `IDBFactory`.

{{AvailableInWorkers}}

## Methods

- {{domxref("IDBFactory.open")}}
  - : The current method to request opening a [connection to a database](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#database_connection).
- {{domxref("IDBFactory.deleteDatabase")}}
  - : A method to request the deletion of a database.
- {{domxref("IDBFactory.cmp")}}
  - : A method that compares two keys and returns a result indicating which one is greater in value.
- {{domxref("IDBFactory.databases")}}
  - : A method that returns a list of all available databases, including their names and versions.

## Example

In the following code snippet, we make a request to open a database, and include handlers for the success and error cases. For a full working example, see our [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) app ([view example live](https://mdn.github.io/to-do-notifications/).)

```js
// Let us open version 4 of our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened successfully, or not
DBOpenRequest.onerror = (event) => {
  console.error("Error loading database.");
};

DBOpenRequest.onsuccess = (event) => {
  console.info("Database initialized.");

  // store the result of opening the database in the db variable. This is used a lot later on, for opening transactions and suchlike.
  db = DBOpenRequest.result;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/).)
