---
title: 'IDBRequest: success event'
slug: Web/API/IDBRequest/success_event
browser-compat: api.IDBRequest.success_event
---
{{ APIRef("IndexedDB") }}

The `success` event is fired when an `IDBRequest` succeeds.

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
          ><a href="/en-US/docs/Web/API/IDBRequest/onsuccess"
            >onsuccess</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

This example tries to open a database and listens for the `success` event using `addEventListener()`:

```js
// Open the database
const openRequest = window.indexedDB.open('toDoList', 4);

openRequest.onupgradeneeded = (event) => {
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

openRequest.addEventListener('success', (event) => {
  console.log('Database opened successfully!');
});
```

The same example, but using the `onsuccess` event handler property:

```js
// Open the database
const openRequest = window.indexedDB.open('toDoList', 4);

openRequest.onupgradeneeded = (event) => {
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

openRequest.onsuccess = (event) => {
  console.log('Database opened successfully!');
};
```

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [`onsuccess`](/en-US/docs/Web/API/IDBRequest/onsuccess) event handler property
