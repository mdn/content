---
title: IDBVersionChangeEvent
slug: Web/API/IDBVersionChangeEvent
page-type: web-api-interface
browser-compat: api.IDBVersionChangeEvent
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

The **`IDBVersionChangeEvent`** interface of the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) indicates that the version of the database has changed, as the result of an {{domxref("IDBOpenDBRequest.upgradeneeded_event", "onupgradeneeded")}} event handler function.

{{InheritanceDiagram}}

## Constructor

- {{domxref("IDBVersionChangeEvent.IDBVersionChangeEvent", "IDBVersionChangeEvent()")}}
  - : Creates and returns a new `IDBVersionChangeEvent` object which is used to represent when a version of the database has changed.

## Instance properties

_Also inherits properties from its parent, {{domxref("Event")}} interface._

- {{ domxref("IDBVersionChangeEvent.oldVersion") }} {{ReadOnlyInline}}
  - : Returns the old version of the database.
- {{ domxref("IDBVersionChangeEvent.newVersion") }} {{ReadOnlyInline}}
  - : Returns the new version of the database.

## Instance methods

_No specific method, but inherits methods from its parent, {{domxref("Event")}} interface._

## Example

In the following code snippet, we make a request to open a database, and include handlers for the success and error cases. Upon a version change (after an `upgradeneeded` event), the `success` event will implement the `IDBVersionChangeEvent` interface. For a full working example, see our [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const note = document.querySelector("ul");

// Let us open version 4 of our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened successfully, or not
DBOpenRequest.onerror = (event) => {
  note.innerHTML += "<li>Error loading database.</li>";
};

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += "<li>Database initialized.</li>";

  // store the result of opening the database in the db variable. This is used a lot later on, for opening transactions and suchlike.
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
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([View the example live](https://mdn.github.io/dom-examples/to-do-notifications/)).
