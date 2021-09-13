---
title: 'IDBDatabase: close event'
slug: Web/API/IDBDatabase/close_event
browser-compat: api.IDBDatabase.close_event
---
{{ APIRef("IndexedDB") }}

The `close` event is fired on `IDBDatabase` when the database connection is unexpectedly closed. This could happen, for example, if the underlying storage is removed or if the user clears the database in the browser's history preferences.

Note that it is not fired if the database connection is closed normally using [`IDBDatabase.close()`](/en-US/docs/Web/API/IDBDatabase/close).

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
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/IDBDatabase/onclose">onerror</a></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

This example opens a database and listens for the `close` event:

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
  db.addEventListener('close', () => {
    console.log('Database connection closed');
  });

};
```

The same example, using the `onclose` property instead of `addEventListener()`:

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
  db.onclose = () => {
    console.log('Database connection closed');
  };

};
```

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [`onclose`](/en-US/docs/Web/API/IDBDatabase/onclose) event handler property
