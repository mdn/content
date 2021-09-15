---
title: 'IDBDatabase: versionchange event'
slug: Web/API/IDBDatabase/versionchange_event
tags:
  - Event
  - IDBDatabase
  - Reference
  - versionchange
browser-compat: api.IDBDatabase.versionchange_event
---
{{APIRef("IndexedDB")}}

The `versionchange` event is fired when a database structure change ([`IDBOpenDBRequest.onupgradeneeded`](/en-US/docs/Web/API/IDBOpenDBRequest/onupgradeneeded "In the following example you can see the onupgradeneeded handler being used to update the database structure if a database with a higher version number is loaded. For a full working example, see our To-do Notifications app (view example live.)") event or [`IDBFactory.deleteDatabase`](/en-US/docs/Web/API/IDBFactory/deleteDatabase "The deleteDatabase() method of the IDBFactory interface requests the deletion of a database. The method returns an IDBOpenDBRequest object immediately, and performs the deletion operation asynchronously.")) was requested.

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
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{DOMxRef("IDBDatabase.onversionchange", "onversionchange")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

This example opens a database and, on success, adds a listener to `versionchange`:

```js
// Open the database
const dBOpenRequest = window.indexedDB.open('Nonexistent', 4);

dBOpenRequest.onupgradeneeded = event => {
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

dBOpenRequest.addEventListener('success', event => {
  const db = event.target.result;
  db.addEventListener('versionchange', event => {
    console.log('The version of this database has changed');
  });

});
```

The same example, using the `onversionchange` event handler property:

```js
// Open the database
const dBOpenRequest = window.indexedDB.open('Nonexistent', 4);

dBOpenRequest.onupgradeneeded = event => {
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

dBOpenRequest.onsuccess = event => {
  const db = event.target.result;
  db.onversionchange = event => {
    console.log('The version of this database has changed');
  };

};
```

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- {{DOMxRef("IDBDatabase.onversionchange", "onversionchange")}} event handler property
