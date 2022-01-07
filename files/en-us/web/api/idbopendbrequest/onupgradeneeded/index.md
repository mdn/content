---
title: IDBOpenDBRequest.onupgradeneeded
slug: Web/API/IDBOpenDBRequest/onupgradeneeded
tags:
  - API
  - Database
  - IDBOpenDBRequest
  - IndexedDB
  - Property
  - Reference
  - Storage
  - onupgradeneeded
browser-compat: api.IDBOpenDBRequest.onupgradeneeded
---
{{ APIRef("IndexedDB") }}

The **`onupgradeneeded`** property of the
{{domxref("IDBOpenDBRequest")}} interface is the event handler for the
{{event("upgradeneeded")}} event, triggered when a database of a bigger version number
than the existing stored database is loaded.

The event passed to the handler is an {{domxref("IDBVersionChangeEvent")}}.

Inside the event handler function you can include code to upgrade the database
structure, as shown in the example below.

{{AvailableInWorkers}}

## Syntax

```js
IDBOpenDBRequest.onupgradeneeded = function(event) { /* ... */ };
```

## Example

In the following example you can see the onupgradeneeded handler being used to update
the database structure if a database with a higher version number is loaded. For a full
working example, see our [To-do
Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) app ([view example live](https://mdn.github.io/to-do-notifications/).)

```js
var db;

// Request version 3 of the database.
var request = window.indexedDB.open("library", 3);

// This event handles the event whereby a new version of the
// database needs to be created. Either one has not been created
// before, or a new version number has been submitted via the
// window.indexedDB.open line above.
request.onupgradeneeded = function(event) {
  db = request.result;

  db.onerror = function(errorEvent) {
    note.innerHTML += '<li>Error loading database.</li>';
  };

  if (event.oldVersion < 1) {
    // Version 1 is the first version of the database.
    var store = db.createObjectStore("books", {keyPath: "isbn"});
    var titleIndex = store.createIndex("by_title", "title", {unique: true});
    var authorIndex = store.createIndex("by_author", "author");
  }
  if (event.oldVersion < 2) {
    // Version 2 introduces a new index of books by year.
    var bookStore = request.transaction.objectStore("books");
    var yearIndex = bookStore.createIndex("by_year", "year");
  }
  if (event.oldVersion < 3) {
    // Version 3 introduces a new object store for magazines with two indexes.
    var magazines = db.createObjectStore("magazines");
    var publisherIndex = magazines.createIndex("by_publisher", "publisher");
    var frequencyIndex = magazines.createIndex("by_frequency", "frequency");
  }
};

request.onerror = function(event) {
  note.innerHTML += '<li>Error loading database.</li>';
};

request.onsuccess = function(event) {
  note.innerHTML += '<li>Database initialised.</li>';
  db = request.result;
  populateAndDisplayData();
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
- [`upgradeneeded`](/en-US/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)
  event
