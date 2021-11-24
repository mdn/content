---
title: IDBObjectStore.createIndex()
slug: Web/API/IDBObjectStore/createIndex
tags:
  - API
  - Database
  - IDBObjectStore
  - IndexedDB
  - Method
  - Reference
  - Storage
  - createIndex
browser-compat: api.IDBObjectStore.createIndex
---
{{ APIRef("IndexedDB") }}

The **`createIndex()`** method of the
{{domxref("IDBObjectStore")}} interface creates and returns a new
{{domxref("IDBIndex")}} object in the connected database. It creates a new
field/column defining a new data point for each database record to contain.

Bear in mind that IndexedDB indexes can contain _any_ JavaScript data type;
IndexedDB uses the [structured
clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) to serialize stored objects, which allows for storage of simple
and complex objects.

Note that this method must be called only from a `VersionChange` transaction
mode callback.

{{AvailableInWorkers}}

## Syntax

```js
var myIDBIndex = objectStore.createIndex(indexName, keyPath);
var myIDBIndex = objectStore.createIndex(indexName, keyPath, objectParameters);
```

### Parameters

- indexName
  - : The name of the index to create. Note that it is possible to create an index with an
    empty name.
- keyPath
  - : The key path for the index to use. Note that it is possible to create an index with
    an empty `keyPath`, and also to pass in a sequence (array) as a
    `keyPath`.
- objectParameters {{optional_inline}}

  - : An {{domxref("IDBIndexParameters")}} object, which can include the following
    properties:

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">Attribute</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>unique</code></td>
          <td>
            If true, the index will not allow duplicate values for a single key.
          </td>
        </tr>
        <tr>
          <td><code>multiEntry</code></td>
          <td>
            If <code>true</code>, the index will add an entry in the index for each
            array element when the <em>keyPath</em> resolves to an Array. If
            <code>false</code>, it will add one single entry containing the Array.
          </td>
        </tr>
        <tr>
          <td><code>locale</code></td>
          <td>
            <p>
              Currently Firefox-only (43+), this allows you to specify a locale for
              the index. Any sorting operations performed on the data via key ranges
              will then obey sorting rules of that locale (see
              <a
                href="/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB#locale-aware_sorting"
                >locale-aware sorting</a
              >.) You can specify its value in one of three ways:
            </p>
            <ul>
              <li>
                <code>string</code>: A string containing a specific locale code,
                e.g. <code>en-US</code>, or <code>pl</code>.
              </li>
              <li>
                <code>auto</code>: The platform default locale will be used (may be
                changed by user agent settings.)
              </li>
              <li>
                <code>null or undefined</code>: If no locale is specified, normal
                JavaScript sorting will be used — not locale-aware.
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>

### Return value

An {{domxref("IDBIndex")}} object: the newly created index.

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

- `ConstraintError` {{domxref("DOMException")}}
  - : Thrown if an index with the same name already exists in the database. Index names are case-sensitive.
- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if the provided key path is a sequence, and `multiEntry` is set to `true` in the `objectParameters` object.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if:
    - The method was not called from a `versionchange` transaction mode callback, i.e. from inside a {{domxref("IDBOpenDBRequest.onupgradeneeded")}} handler.
    - The object store has been deleted.
- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if the provided `keyPath` is not a <a href="https://www.w3.org/TR/IndexedDB/#dfn-valid-key-path">valid key path</a>.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if the transaction this {{domxref("IDBObjectStore")}}
        belongs to is not active (e.g. has been deleted or removed.) In Firefox
        previous to version 41, an `InvalidStateError` was raised in
        this case as well, which was misleading; this has now been fixed (see
        {{Bug("1176165")}}.)

## Example

In the following example you can see
the {{domxref("IDBOpenDBRequest.onupgradeneeded")}} handler being used to update the
database structure if a database with a higher version number is loaded.
`createIndex()` is used to create new indexes on the object store.  For a
full working example, see our [To-do
Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) app ([view example live](https://mdn.github.io/to-do-notifications/).)

```js
var db;

// Let us open our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Two event handlers for opening the database.
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '<li>Error loading database.</li>';
};

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Database initialised.</li>';

  // store the result of opening the database in the db variable.
  // This is used a lot below.
  db = request.result;

  // Run the displayData() function to populate the task list with
  // all the to-do list data already in the IDB
  displayData();
};

// This handler fires when a new database is created and indicates
// either that one has not been created before, or a new version
// was submitted with window.indexedDB.open(). (See above.)
// It is only implemented in recent browsers.
DBOpenRequest.onupgradeneeded = function(event) {
  var db = event.target.result;

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
