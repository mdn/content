---
title: IDBDatabase.onabort
slug: Web/API/IDBDatabase/onabort
tags:
  - API
  - Database
  - IDBDatabase
  - IndexedDB
  - Property
  - Reference
  - Storage
  - onabort
browser-compat: api.IDBDatabase.onabort
---
{{ APIRef("IndexedDB") }}

The **onabort** event handler of the {{domxref("IDBDatabase")}} interface
handles the abort event, fired when a transaction is aborted and bubbles up to the
connection object.

{{AvailableInWorkers}}

## Syntax

```js
IDBDatabase.onabort = function(event) { /* ... */ };
```

## Example

This example shows an {{domxref("IDBOpenDBRequest.onupgradeneeded")}} block that
creates a new object store; it also includes `onerror` and
`onabort` functions to handle non-success cases.

```js
DBOpenRequest.onupgradeneeded = function(event) {
  var db = event.target.result;

  db.onerror = function() {
    note.innerHTML += '<li>Error opening database.</li>';
  };

  db.onabort = function() {
    note.innerHTML += '<li>Database opening aborted!</li>';
  };

  // Create an objectStore for this database

  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  // define what data items the objectStore will contain

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });

  objectStore.createIndex("notified", "notified", { unique: false });

  note.innerHTML += '<li>Object store created.</li>';
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
- [`abort`](/en-US/docs/Web/API/IDBDatabase/abort_event) event
