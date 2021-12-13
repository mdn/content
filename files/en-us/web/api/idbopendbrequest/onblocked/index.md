---
title: IDBOpenDBRequest.onblocked
slug: Web/API/IDBOpenDBRequest/onblocked
tags:
  - API
  - Database
  - IDBOpenDBRequest
  - IndexedDB
  - Property
  - Reference
  - Storage
  - onblocked
browser-compat: api.IDBOpenDBRequest.onblocked
---
{{ APIRef("IndexedDB") }}

The **`onblocked`** event handler of the
{{domxref("IDBOpenDBRequest")}} interface is the event handler for the
{{event("blocked")}} event. This event is triggered when the {{event("upgradeneeded")}}
should be triggered because of a version change but the database is still in use (that
is, not closed) somewhere, even after the `versionchange` event was sent.

{{AvailableInWorkers}}

## Syntax

```js
IDBOpenDBRequest.onblocked = function(event) { /* ... */ };
```

## Example

```js
var db;

// Let us open our database
var request = indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened
// successfully, or not
request.onerror = function(event) {
  note.innerHTML += '<li>Error loading database.</li>';
};

request.onsuccess = function(event) {
  note.innerHTML += '<li>Database initialised.</li>';

  // store the result of opening the database in the db variable.
  // This is used a lot below
  db = request.result;

  // Run the displayData() function to populate the task list with
  // all the to-do list data already in the IDB
  displayData();
};

// This event handles the event whereby a new version of the
// database needs to be created. Either one has not been created
// before, or a new version number has been submitted via the
// window.indexedDB.open line above
//it is only implemented in recent browsers
request.onupgradeneeded = function(event) {
  var db = event.target.result;

  db.onerror = function(event) {
    note.innerHTML += '<li>Error loading database.</li>';
  };

  // Create an objectStore for this database
  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  ...
};

request.onblocked = function() {
  console.log("Your database version can't be upgraded because the app is open somewhere else.");
}
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
- [`blocked`](/en-US/docs/Web/API/IDBOpenDBRequest/blocked_event)
  event
