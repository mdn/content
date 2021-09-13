---
title: 'IDBDatabase: error event'
slug: Web/API/IDBDatabase/error_event
browser-compat: api.IDBDatabase.error_event
---
{{ APIRef("IndexedDB") }}

The `error` event is fired on `IDBDatabase` when a request returns an error and the event bubbles up to the connection object.

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
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/IDBDatabase/onerror">onerror</a></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

This example opens a database and tries to add a record, listening for the `error` event for the `add()` operation (this will occur if, for example, a record with the given `taskTitle` already exists):

```js
// Open the database
const dBOpenRequest = window.indexedDB.open('toDoList', 4);

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
  const newItem = { taskTitle: 'my task', hours: 10, minutes: 10, day: 10, month: 'January', year: 2020 };
  const db = dBOpenRequest.result;

  db.addEventListener('error', () => {
    console.log(`Error adding new item: ${newItem.taskTitle}`);
  });

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(['toDoList'], 'readwrite');
  const objectStore = transaction.objectStore('toDoList');
  const objectStoreRequest = objectStore.add(newItem);
};
```

The same example, using the `onerror` property instead of `addEventListener()`:

```js
// Open the database
const dBOpenRequest = window.indexedDB.open('toDoList', 4);

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
  const newItem = { taskTitle: 'my task', hours: 10, minutes: 10, day: 10, month: 'January', year: 2020 };
  const db = dBOpenRequest.result;

  db.onerror = () => {
    console.log(`Error adding new item: ${newItem.taskTitle}`);
  };

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(['toDoList'], 'readwrite');
  const objectStore = transaction.objectStore('toDoList');
  const objectStoreRequest = objectStore.add(newItem);
};
```

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [`onerror`](/en-US/docs/Web/API/IDBDatabase/onerror) event handler property
