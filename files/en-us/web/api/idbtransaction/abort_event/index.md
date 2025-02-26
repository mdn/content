---
title: "IDBTransaction: abort event"
short-title: abort
slug: Web/API/IDBTransaction/abort_event
page-type: web-api-event
browser-compat: api.IDBTransaction.abort_event
---

{{APIRef("IndexedDB")}}

The `abort` event is fired when an `IndexedDB` transaction is aborted.

This can happen for any of the following reasons:

- Bad requests, (E.g., trying to add the same key twice, or put the same index key when the key has a uniqueness constraint).
- An explicit {{DOMxRef("IDBTransaction.abort", "abort()")}} call.
- An uncaught exception in the request's success/error handler.
- An I/O error (an actual failure to write to disk, for example disk detached, or other OS/hardware failure).
- Quota exceeded.

This non-cancelable event [bubbles](/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling) to the associated {{domxref("IDBDatabase")}} object.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("abort", (event) => {});
onabort = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Bubbling

This event bubbles to {{domxref("IDBDatabase")}}. The `event.target` property refers to the {{domxref('IDBTransaction')}} object that bubbles up.

For more information, see [Event bubbling](/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling).

## Examples

This example opens a database (creating the database if it does not exist), then opens a transaction, adds a listener to the `abort` event, then aborts the transaction to trigger the event.

```js
// Open the database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = () => {
    console.log("Error creating database");
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
};

DBOpenRequest.onsuccess = (event) => {
  const db = DBOpenRequest.result;

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(["toDoList"], "readwrite");

  // add a listener for `abort`
  transaction.addEventListener("abort", () => {
    console.log("Transaction was aborted");
  });

  // abort the transaction
  transaction.abort();
};
```

The same example, but assigning the event handler to the `onabort` property:

```js
// Open the database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = () => {
    console.log("Error creating database");
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
};

DBOpenRequest.onsuccess = (event) => {
  const db = DBOpenRequest.result;

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(["toDoList"], "readwrite");

  // add a listener for `abort`
  transaction.onabort = (event) => {
    console.log("Transaction was aborted");
  };

  // abort the transaction
  transaction.abort();
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
