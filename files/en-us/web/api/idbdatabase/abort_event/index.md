---
title: 'IDBDatabase: abort event'
slug: Web/API/IDBDatabase/abort_event
browser-compat: api.IDBDatabase.abort_event
---
{{ APIRef("IndexedDB") }}

The `abort` event is fired on `IDBDatabase` when a transaction is aborted and bubbles up to the connection object.

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
          ><a href="/en-US/docs/Web/API/IDBDatabase/onabort">onabort</a></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

This example opens a database (creating the database if it does not exist), then opens a transaction, adds a listener to the `abort` event, then aborts the transaction to trigger the event.

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
  const db = dBOpenRequest.result;

  db.addEventListener('abort', () => {
    console.log('Transaction aborted');
  });

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(['toDoList'], 'readwrite');

  // abort the transaction
  transaction.abort();
};
```

The same example, but assigning the event handler to the [`onabort`](/en-US/docs/Web/API/IDBDatabase/onabort) property:

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
  const db = dBOpenRequest.result;

  db.onabort = () => {
    console.log('Transaction aborted');
  };

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(['toDoList'], 'readwrite');

  // abort the transaction
  transaction.abort();
};
```

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [`onabort`](/en-US/docs/Web/API/IDBDatabase/onabort) event handler property
