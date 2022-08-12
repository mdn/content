---
title: 'IDBDatabase: versionchange event'
slug: Web/API/IDBDatabase/versionchange_event
page-type: web-api-event
tags:
  - Event
  - IDBDatabase
  - Reference
  - versionchange
browser-compat: api.IDBDatabase.versionchange_event
---
{{APIRef("IndexedDB")}}

The `versionchange` event is fired when a database structure change ([`upgradeneeded`](/en-US/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) event send on an [`IDBOpenDBRequest`](/en-US/docs/Web/API/IDBOpenDBRequest) or [`IDBFactory.deleteDatabase`](/en-US/docs/Web/API/IDBFactory/deleteDatabase)) was requested elsewhere (most probably in
another window/tab on the same computer).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('versionchange', (event) => { });
onversionchange = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

This example opens a database and, on success, adds a listener to `versionchange`:

```js
// Open the database
const dBOpenRequest = window.indexedDB.open('Nonexistent', 4);

dBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;
  // Create an objectStore for this database
  const objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // define what data items the objectStore will contain
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
};

dBOpenRequest.addEventListener('success', (event) => {
  const db = event.target.result;
  db.addEventListener('versionchange', (event) => {
    console.log('The version of this database has changed');
  });

});
```

The same example, using the `onversionchange` event handler property:

```js
// Open the database
const dBOpenRequest = window.indexedDB.open('Nonexistent', 4);

dBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;
  // Create an objectStore for this database
  const objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // define what data items the objectStore will contain
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
};

dBOpenRequest.onsuccess = (event) => {
  const db = event.target.result;
  db.onversionchange = (event) => {
    console.log('The version of this database has changed');
  };
};
```

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
