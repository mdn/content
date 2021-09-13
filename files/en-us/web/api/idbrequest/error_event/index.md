---
title: 'IDBRequest: error event'
slug: Web/API/IDBRequest/error_event
tags:
  - Error
  - Event
  - IDBRequest
  - Reference
browser-compat: api.IDBRequest.error_event
---
{{APIRef("IndexedDB")}}

The `error` handler is executed when an error caused a request to fail.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{DOMxRef("IDBRequest.onerror", "onerror")}}</td>
    </tr>
  </tbody>
</table>

## Examples

This example opens a database and tries to add a record, listening for the `error` event for the `add()` operation (this will occur if, for example, a record with the given `taskTitle` already exists):

```js
// Open the database
const DBOpenRequest = window.indexedDB.open('toDoList', 4);

DBOpenRequest.addEventListener('upgradeneeded', event => {
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
});

DBOpenRequest.addEventListener('success', event => {
  const db = DBOpenRequest.result;

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(['toDoList'], 'readwrite');
  const objectStore = transaction.objectStore('toDoList');
  const newItem = { taskTitle: 'my task', hours: 10, minutes: 10, day: 10, month: 'January', year: 2020 };

  const objectStoreRequest = objectStore.add(newItem);
  objectStoreRequest.addEventListener('error', () => {
    console.log(`Error adding new item: ${newItem.taskTitle}`);
  });
});
```

The same example, using the `onerror` property instead of `addEventListener()`:

```js
// Open the database
const DBOpenRequest = window.indexedDB.open('toDoList', 4);

DBOpenRequest.onupgradeneeded = event => {
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

DBOpenRequest.onsuccess = event => {
  const db = DBOpenRequest.result;

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(['toDoList'], 'readwrite');
  const objectStore = transaction.objectStore('toDoList');
  const newItem = { taskTitle: 'my task', hours: 10, minutes: 10, day: 10, month: 'January', year: 2020 };

  const objectStoreRequest = objectStore.add(newItem);
  objectStoreRequest.onerror = () => {
    console.log(`Error adding new item: ${newItem.taskTitle}`);
  };
};
```

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- {{DOMxRef("IDBRequest.onerror", "onerror")}} event handler property
