---
title: IDBOpenDBRequest
slug: Web/API/IDBOpenDBRequest
tags:
  - API
  - DOM Reference
  - Database
  - IDBOpenDBRequest
  - IndexedDB
  - Interface
  - Reference
  - Storage
browser-compat: api.IDBOpenDBRequest
---
{{APIRef("IndexedDB")}}

The **`IDBOpenDBRequest`** interface of the IndexedDB API provides access to the results of requests to open or delete databases (performed using {{domxref("IDBFactory.open")}} and {{domxref("IDBFactory.deleteDatabase")}}), using specific event handler attributes.

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## Properties

_Also inherits methods from its parents {{domxref("IDBRequest")}} and {{domxref("EventTarget")}}_.

## Methods

_No methods, but inherits methods from its parents {{domxref("IDBRequest")}} and {{domxref("EventTarget")}}._

## Events

_Events defined on parent interfaces, {{DOMxRef("IDBRequest")}} and {{DOMxRef("EventTarget")}}, can also be dispatched on `IDBOpenDBRequest` objects._

Listen to these generic and specific events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this interface.

Events specific to this interface are:

- [`blocked`](/en-US/docs/Web/API/IDBOpenDBRequest/blocked_event)
  - : Fired when an open connection to a database is blocking a `versionchange` transaction on the same database. Also available via the [`onblocked`](/en-US/docs/Web/API/IDBOpenDBRequest/onblocked) property.
- [`upgradeneeded`](/en-US/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)
  - : Fired when an attempt was made to open a database with a version number higher than its current version. Also available via the [`onupgradeneeded`](/en-US/docs/Web/API/IDBOpenDBRequest/onupgradeneeded) property.

## Example

In the following example you can see the onupgradeneeded handler being used to update the database structure if a database with a higher version number is loaded. For a full working example, see our [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) app ([view example live](https://mdn.github.io/to-do-notifications/).)

```js
var db;

// Let us open our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these event handlers act on the database being opened.
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '<li>Error loading database.</li>';
};

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Database initialised.</li>';

  // store the result of opening the database in the db
  // variable. This is used a lot below
  db = DBOpenRequest.result;

  // Run the displayData() function to populate the task
  // listwith all the to-do list data already in the IDB
  displayData();
};

// This event handles the event whereby a new version of
// the database needs to be created Either one has not
// been created before, or a new version number has been
// submitted via the window.indexedDB.open line above
// it is only implemented in recent browsers
DBOpenRequest.onupgradeneeded = function(event) {
  var db = this.result;

  db.onerror = function(event) {
    note.innerHTML += '<li>Error loading database.</li>';
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
