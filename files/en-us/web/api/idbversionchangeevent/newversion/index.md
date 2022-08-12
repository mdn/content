---
title: IDBVersionChangeEvent.newVersion
slug: Web/API/IDBVersionChangeEvent/newVersion
page-type: web-api-instance-property
tags:
  - API
  - Database
  - IDBVersionChangeEvent
  - IndexedDB
  - Property
  - Reference
  - Storage
  - newVersion
browser-compat: api.IDBVersionChangeEvent.newVersion
---
{{ APIRef("IndexedDB") }}

The **`newVersion`** read-only property of the
{{domxref("IDBVersionChangeEvent")}} interface returns the new version number of the
database.

{{AvailableInWorkers}}

## Value

A number that is a 64-bit integer.

## Examples

In the following code snippet, we make a request to open a database, and include
handlers for the success and error cases. These events are fired via the custom
`IDBVersionChangeEvent` interface. For a full working example, see our [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) app ([view example live](https://mdn.github.io/to-do-notifications/).)

```js
const note = document.querySelector("ul");

// Let us open version 4 of our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened
DBOpenRequest.onerror = (event) => {
  note.innerHTML += '<li>Error loading database.</li>';
};

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += '<li>Database initialized.</li>';

  // store the result of opening the database in the db variable.
  // This is used a lot later on, for opening transactions and suchlike.
  const db = DBOpenRequest.result;
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
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages)
  ([view example live](https://mdn.github.io/to-do-notifications/).)
