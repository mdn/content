---
title: "IDBRequest: success event"
short-title: success
slug: Web/API/IDBRequest/success_event
page-type: web-api-event
browser-compat: api.IDBRequest.success_event
---

{{ APIRef("IndexedDB") }}

The `success` event is fired when an `IDBRequest` succeeds. In the `success` event handler, you can access the result of the request, as well as place more requests to the same transaction.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("success", (event) => {});

onsuccess = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

This example tries to open a database and listens for the `success` event using `addEventListener()`:

```js
// Open the database
const openRequest = window.indexedDB.open("toDoList", 4);

openRequest.onupgradeneeded = (event) => {
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

openRequest.addEventListener("success", (event) => {
  console.log("Database opened successfully!");
});
```

The same example, but using the `onsuccess` event handler property:

```js
// Open the database
const openRequest = window.indexedDB.open("toDoList", 4);

openRequest.onupgradeneeded = (event) => {
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

openRequest.onsuccess = (event) => {
  console.log("Database opened successfully!");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
