---
title: IDBDatabase.onversionchange
slug: Web/API/IDBDatabase/onversionchange
tags:
  - API
  - Database
  - IDBDatabase
  - IndexedDB
  - Property
  - Reference
  - Storage
  - onversionchange
browser-compat: api.IDBDatabase.onversionchange
---
{{ APIRef("IndexedDB") }}

The **`onversionchange`** event handler of the
{{domxref("IDBDatabase")}} interface handles the versionchange event, fired when a
database structure change ({{ domxref("IDBOpenDBRequest.onupgradeneeded")}} event or
{{ domxref("IDBFactory.deleteDatabase")}}) was requested elsewhere (most probably in
another window/tab on the same computer).

This is different from the `versionchange` transaction (but it is
related).

{{AvailableInWorkers}}

## Syntax

```js
IDBDatabase.onversionchange = function(event) { /* ... */ }
```

## Example

This example shows an {{domxref("IDBOpenDBRequest.onupgradeneeded")}} block that
creates a new object store; it also includes `onerror` and `onabort` functions to handle non-success cases, and
an onversionchange function to notify when a database structure change has occurred.

```js
request.onupgradeneeded = function(event) {
  var db = event.target.result;

  db.onerror = function(event) {
    note.innerHTML += '<li>Error opening database.</li>';
  };

  db.onabort = function(event) {
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

  db.onversionchange = function(event) {
    note.innerHTML += '<li>a database change has occurred; you should refresh this
                       browser window, or close it down and use the other open version of
                       this application, wherever it exists.</li>';
  };
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
- [`versionchange`](/en-US/docs/Web/API/IDBDatabase/versionchange_event)
  event
