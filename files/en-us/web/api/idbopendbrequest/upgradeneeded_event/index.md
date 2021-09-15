---
title: 'IDBOpenDBRequest: upgradeneeded event'
slug: Web/API/IDBOpenDBRequest/upgradeneeded_event
tags:
  - Event
  - IDBOpenDBRequest
  - Reference
  - upgradeneeded
browser-compat: api.IDBOpenDBRequest.upgradeneeded_event
---
{{APIRef("IndexedDB")}}

The `upgradeneeded` event is fired when an attempt was made to open a database with a version number higher than its current version.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{DOMxRef("IDBVersionChangeEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler</th>
      <td>
        {{DOMxRef("IDBOpenDBRequest.onupgradeneeded", "onupgradeneeded")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

This example opens a database and handles the `upgradeneeded` event by making any necessary updates to the object store.

```js
// Open the database
const dBOpenRequest = window.indexedDB.open('toDoList', 4);

dBOpenRequest.addEventListener('upgradeneeded', event => {
  const db = event.target.result;
  console.log(`Upgrading to version ${db.version}`);

  // Create an objectStore for this database
  var objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // define what data items the objectStore will contain
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
});
```

This is the same example, but uses the onupgradeneeded event handler property.

```js
// Open the database
const dBOpenRequest = window.indexedDB.open('toDoList', 4);

dBOpenRequest.onupgradeneeded = event => {
  const db = event.target.result;
  console.log(`Upgrading to version ${db.version}`);

  // Create an objectStore for this database
  var objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // define what data items the objectStore will contain
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
};
```

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- {{DOMxRef("IDBOpenDBRequest.onupgradeneeded", "onupgradeneeded")}} event handler property
