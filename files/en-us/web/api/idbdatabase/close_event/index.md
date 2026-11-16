---
title: "IDBDatabase: close event"
short-title: close
slug: Web/API/IDBDatabase/close_event
page-type: web-api-event
browser-compat: api.IDBDatabase.close_event
---

{{ APIRef("IndexedDB") }}

The `close` event is fired on `IDBDatabase` when the database connection is unexpectedly closed. This could happen, for example, if the underlying storage is removed or if the user clears the database in the browser's history preferences.

Note that it is not fired if the database connection is closed normally using [`IDBDatabase.close()`](/en-US/docs/Web/API/IDBDatabase/close).

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("close", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onclose = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

This example opens a database and listens for the `close` event:

```js
// Open the database
const dBOpenRequest = window.indexedDB.open("toDoList", 4);

dBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

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

dBOpenRequest.onsuccess = (event) => {
  const db = dBOpenRequest.result;
  db.addEventListener("close", () => {
    console.log("Database connection closed");
  });
};
```

The same example, using the `onclose` property instead of `addEventListener()` (but note that this replaces other event listeners added using `onclose`, if any):

```js
// Open the database
const dBOpenRequest = window.indexedDB.open("toDoList", 4);

dBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

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

dBOpenRequest.onsuccess = (event) => {
  const db = dBOpenRequest.result;
  db.onclose = () => {
    console.log("Database connection closed");
  };
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
