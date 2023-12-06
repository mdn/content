---
title: IDBOpenDBRequest
slug: Web/API/IDBOpenDBRequest
page-type: web-api-interface
browser-compat: api.IDBOpenDBRequest
---

{{APIRef("IndexedDB")}}

The **`IDBOpenDBRequest`** interface of the IndexedDB API provides access to the results of requests to open or delete databases (performed using {{domxref("IDBFactory.open")}} and {{domxref("IDBFactory.deleteDatabase")}}), using specific event handler attributes.

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from its parents {{domxref("IDBRequest")}} and {{domxref("EventTarget")}}_.

## Instance methods

_No methods, but inherits methods from its parents {{domxref("IDBRequest")}} and {{domxref("EventTarget")}}._

## Events

_Events defined on parent interfaces, {{DOMxRef("IDBRequest")}} and {{DOMxRef("EventTarget")}}, can also be dispatched on `IDBOpenDBRequest` objects._

Listen to these generic and specific events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this interface.

Events specific to this interface are:

- [`blocked`](/en-US/docs/Web/API/IDBOpenDBRequest/blocked_event)
  - : Fired when an open connection to a database is blocking a `versionchange` transaction on the same database. Also available via the [`onblocked`](/en-US/docs/Web/API/IDBOpenDBRequest/blocked_event) property.
- [`upgradeneeded`](/en-US/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)
  - : Fired when an attempt was made to open a database with a version number higher than its current version. Also available via the [`onupgradeneeded`](/en-US/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) property.

## Example

In the following example you can see the onupgradeneeded handler being used to update the database structure if a database with a higher version number is loaded. For a full working example, see our [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)

```js
let db;

// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these event handlers act on the database being opened.
DBOpenRequest.onerror = (event) => {
  note.innerHTML += "<li>Error loading database.</li>";
};

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += "<li>Database initialized.</li>";

  // store the result of opening the database in the db
  // variable. This is used a lot below
  db = DBOpenRequest.result;

  // Run the displayData() function to populate the task
  // list with all the to-do list data already in the IDB
  displayData();
};

// This event handles the event whereby a new version of
// the database needs to be created Either one has not
// been created before, or a new version number has been
// submitted via the window.indexedDB.open line above
// it is only implemented in recent browsers
DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = (event) => {
    note.innerHTML += "<li>Error loading database.</li>";
  };

  // Create an objectStore for this database
  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

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
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([View the example live](https://mdn.github.io/dom-examples/to-do-notifications/)).
