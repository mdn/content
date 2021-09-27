---
title: IDBObjectStore.deleteIndex()
slug: Web/API/IDBObjectStore/deleteIndex
tags:
  - API
  - Database
  - IDBObjectStore
  - IndexedDB
  - Method
  - Reference
  - Storage
  - deleteIndex
browser-compat: api.IDBObjectStore.deleteIndex
---
{{ APIRef("IndexedDB") }}

The **`deleteIndex()`** method of the
{{domxref("IDBObjectStore")}} interface destroys the index with the specified name in
the connected database, used during a version upgrade.

Note that this method must be called only from a `VersionChange` transaction
mode callback. Note that this method synchronously modifies the
{{domxref("IDBObjectStore.indexNames")}} property.

{{AvailableInWorkers}}

## Syntax

```js
objectStore.deleteIndex(indexName);
```

### Parameters

- `indexName`
  - : The name of the existing index to remove.

### Return value

None.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the method was not called from a `versionchange` transaction mode callback.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if the transaction this {{domxref("IDBObjectStore")}} belongs to is not active (e.g. has been deleted or removed.)
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if there is no index with the given name (case-sensitive) in the database.

## Example

In the following example you can see
the {{domxref("IDBOpenDBRequest.onupgradeneeded")}} handler being used to update the
database structure if a database with a higher version number is loaded.
{{domxref("IDBObjectStore.createIndex")}} is used to create new indexes on the object
store, after which we delete the unneeded old indexes with `deleteIndex()`.
For a full working example, see our
[To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) app ([view example live](https://mdn.github.io/to-do-notifications/).)

```js
var db;

// Let us open our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened successfully, or not
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '<li>Error loading database.</li>';
};

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Database initialised.</li>';

  // store the result of opening the database in the db variable. This is used a lot below
  db = this.result;

  // Run the displayData() function to populate the task list with all the to-do list data already in the IDB
  displayData();
};

// This event handles the event whereby a new version of the database needs to be created
// Either one has not been created before, or a new version number has been submitted via the
// window.indexedDB.open line above
//it is only implemented in recent browsers
DBOpenRequest.onupgradeneeded = function(event) {
  var db = this.result;

  db.onerror = function(event) {
    note.innerHTML += '<li>Error loading database.</li>';
  };

  // Create an objectStore for this database
  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  // define what data items the objectStore will contain

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });
  objectStore.createIndex("notified", "notified", { unique: false });

  objectStore.deleteIndex("seconds");
  objectStore.deleteIndex("contact");

};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do
  Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/).)
