---
title: IDBDatabase.name
slug: Web/API/IDBDatabase/name
tags:
  - API
  - Database
  - IDBDatabase
  - IndexedDB
  - Property
  - Reference
  - Storage
  - name
browser-compat: api.IDBDatabase.name
---
{{ APIRef("IndexedDB") }}

The **`name`** read-only property of the
`IDBDatabase` interface is a {{ domxref("DOMString")}} that contains the
name of the connected database.

{{AvailableInWorkers}}

## Syntax

```js
var dbName = IDBDatabase.name;
```

### Value

A {{ domxref("DOMString")}} containing the name of the connected database.

## Example

This example shows a database connection being opened, the resulting
{{domxref("IDBDatabase")}} object being stored in a db variable, and the name property
then being logged. For a full example, see our
[To-do Notifications](https://github.com/chrisdavidmills/to-do-notifications/tree/gh-pages)
 app ([view example live](https://chrisdavidmills.github.io/to-do-notifications/)).

```js
// Let us open our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being
// opened successfully, or not
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '<li>Error loading database.</li>';
};

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Database initialised.</li>';

  // store the result of opening the database in the db variable. This is used a lot below
  db = DBOpenRequest.result;

  // This line will log the name of the database, which should be "toDoList"
  console.log(db.name);
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
- Reference example: [To-do
  Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/).)
