---
title: 'IDBOpenDBRequest: blocked event'
slug: Web/API/IDBOpenDBRequest/blocked_event
tags:
  - Event
  - IDBOpenDBRequest
  - Reference
  - blocked
browser-compat: api.IDBOpenDBRequest.blocked_event
---
{{APIRef("IndexedDB")}}

The `blocked` handler is executed when an open connection to a database is blocking a `versionchange` transaction on the same database.

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
      <td>{{domxref("IDBVersionChangeEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{DOMxRef("IDBOpenDBRequest.onblocked", "onblocked")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

Using `addEventListener()`:

```js
// Open the database
const DBOpenRequest = window.indexedDB.open('toDoList', 4);

DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = () => {
    console.log('Error creating database');
  };

  // Create an objectStore for this database
  var objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // define what data items the objectStore will contain
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
};

DBOpenRequest.onsuccess = (event) => {
  // Let's try to open the same database with a higher revision version
  const req2 = indexedDB.open('toDoList', 5);

  // In this case the onblocked handler will be executed
  req2.addEventListener('blocked', () => {
    console.log('Request was blocked');
  });

};
```

Using the [`onblocked`](/en-US/docs/Web/API/IDBOpenDBRequest/onblocked) property:

```js
// Open the database
const DBOpenRequest = window.indexedDB.open('toDoList', 4);

DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = () => {
    console.log('Error creating database');
  };

  // Create an objectStore for this database
  var objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // define what data items the objectStore will contain
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
};

DBOpenRequest.onsuccess = (event) => {
  // Let's try to open the same database with a higher revision version
  const req2 = indexedDB.open('toDoList', 5);

  // In this case the onblocked handler will be executed
  req2.onblocked = () => {
    console.log('Request was blocked');
  };

};
```

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- {{DOMxRef("IDBOpenDBRequest.onblocked", "onblocked")}} event handler property
