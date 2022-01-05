---
title: 'IDBTransaction: abort event'
slug: Web/API/IDBTransaction/abort_event
tags:
  - Event
  - IDBTransaction
  - Reference
  - abort
browser-compat: api.IDBTransaction.abort_event
---
{{APIRef("IndexedDB")}}

The `abort` event is fired when an `IndexedDB` transaction is aborted.

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
      <td>{{DOMxRef("IDBTransaction.onabort", "onabort")}}</td>
    </tr>
  </tbody>
</table>

This can happen for any of the following reasons:

- bad requests, (for example, trying to add the same key twice, or put the same index key when the key has a uniqueness constraint),
- an explicit {{DOMxRef("IDBTransaction.abort", "abort()")}} call
- an uncaught exception in the request's success/error handler,
- an I/O error (an actual failure to write to disk, for example disk detached, or other OS/hardware failure)
- quota exceeded.

## Examples

This example opens a database (creating the database if it does not exist), then opens a transaction, adds a listener to the `abort` event, then aborts the transaction to trigger the event.

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

  // add a listener for `abort`
  transaction.addEventListener('abort', () => {
    console.log('Transaction was aborted');
  });

  // abort the transaction
  transaction.abort();
};
```

The same example, but assigning the event handler to the {{DOMxRef("IDBTransaction.onabort", "onabort")}} property:

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

  // add a listener for `abort`
  transaction.onabort = (event) => {
    console.log('Transaction was aborted');
  };

  // abort the transaction
  transaction.abort();
};
```

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- {{DOMxRef("IDBTransaction.onabort", "onabort")}} event handler property
