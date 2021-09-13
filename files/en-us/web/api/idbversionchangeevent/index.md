---
title: IDBVersionChangeEvent
slug: Web/API/IDBVersionChangeEvent
tags:
  - API
  - DOM
  - Database
  - IDBVersionChangeEvent
  - IndexedDB
  - Interface
  - JavaScript
  - Reference
  - Storage
browser-compat: api.IDBVersionChangeEvent
---
{{APIRef("IndexedDB")}}

The **`IDBVersionChangeEvent`** interface of the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) indicates that the version of the database has changed, as the result of an {{domxref("IDBOpenDBRequest.onupgradeneeded")}} event handler function.

{{AvailableInWorkers}}

## Constructor

- {{domxref("IDBVersionChangeEvent.IDBVersionChangeEvent", "IDBVersionChangeEvent()")}}
  - : Creates and returns a new `IDBVersionChangeEvent` object which is used to represent when a version of the database has changed.

## Properties

_Also inherits properties from its parent, {{domxref("Event")}} interface._

- {{ domxref("IDBVersionChangeEvent.oldVersion") }} {{readonlyInline}}
  - : Returns the old version of the database.
- {{ domxref("IDBVersionChangeEvent.newVersion") }} {{readonlyInline}}
  - : Returns the new version of the database.

### Deprecated properties

- {{ domxref("IDBVersionChangeEvent.version") }} {{readonlyInline}} {{deprecated_inline}}

  - : The new version of the database in a {{event("versionchange")}} transaction.

    > **Warning:** While this property is still implemented in older browsers, the latest specification replaces it with the `oldVersion` and `newVersion` attributes. See the compatibility table to know what browsers support them.

### Methods

_No specific method, but inherits properties from its parent, {{domxref("Event")}} interface._

## Example

In the following code snippet, we make a request to open a database, and include handlers for the success and error cases. Upon a version change (after an `upgradedneeded` event), the `success` event will implement the `IDBVersionChangeEvent` interface. For a full working example, see our [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) app ([view example live](https://mdn.github.io/to-do-notifications/).)

```js
var note = document.querySelector("ul");

// In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)

// Let us open version 4 of our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened successfully, or not
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '<li>Error loading database.</li>';
};

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Database initialised.</li>';

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
- [IDBDatabase.onversionchange](/en-US/docs/Web/API/IDBDatabase/onversionchange)
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/).)
