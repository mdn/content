---
title: IDBVersionChangeEvent.newVersion
slug: Web/API/IDBVersionChangeEvent/newVersion
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

The **`newVersion`** read-only property of the
{{domxref("IDBVersionChangeEvent")}} interface returns the new version number of the
database.

{{AvailableInWorkers}}

## Syntax

```js
var newVersion = IDBVersionChangeEvent.newVersion
```

### Value

A [64-bit
integer](</en-US/docs/NSPR_API_Reference/Long_Long_(64-bit)_Integers>).

## Example

In the following code snippet, we make a request to open a database, and include
handlers for the success and error cases. These events are fired via the custom
`IDBVersionChangeEvent` interface. For a full working example, see our [To-do
Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) app ([view example live](https://mdn.github.io/to-do-notifications/).)

```js
var note = document.querySelector("ul");

// In the following line, you should include the prefixes of
// implementations you want to test.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla has never prefixed these objects,
//  so we don't need window.mozIDB*)

// Let us open version 4 of our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '<li>Error loading database.</li>';
};

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Database initialised.</li>';

  // store the result of opening the database in the db variable.
  // This is used a lot later on, for opening transactions and suchlike.
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
- Reference example: [To-do
  Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/).)
