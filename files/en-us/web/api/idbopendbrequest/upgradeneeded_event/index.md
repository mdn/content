---
title: "IDBOpenDBRequest: upgradeneeded event"
short-title: upgradeneeded
slug: Web/API/IDBOpenDBRequest/upgradeneeded_event
page-type: web-api-event
browser-compat: api.IDBOpenDBRequest.upgradeneeded_event
---

{{APIRef("IndexedDB")}}

The `upgradeneeded` event is fired when an attempt was made to open a database with a version number higher than its current version.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("upgradeneeded", (event) => {});

onupgradeneeded = (event) => {};
```

## Event type

An {{domxref("IDBVersionChangeEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("IDBVersionChangeEvent")}}

## Event properties

_Also inherits properties from its parent, {{domxref("Event")}} interface._

- {{ domxref("IDBVersionChangeEvent.oldVersion") }} {{ReadOnlyInline}}
  - : Returns the old version of the database.
- {{ domxref("IDBVersionChangeEvent.newVersion") }} {{ReadOnlyInline}}
  - : Returns the new version of the database.

## Examples

This example opens a database and handles the `upgradeneeded` event by making any necessary updates to the object store.

```js
// Open the database
const dBOpenRequest = window.indexedDB.open("toDoList", 4);

dBOpenRequest.addEventListener("upgradeneeded", (event) => {
  const db = event.target.result;
  console.log(`Upgrading to version ${db.version}`);

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
});
```

This is the same example, but uses the onupgradeneeded event handler property.

```js
// Open the database
const dBOpenRequest = window.indexedDB.open("toDoList", 4);

dBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;
  console.log(`Upgrading to version ${db.version}`);

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
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
