---
title: IDBFactory.open()
slug: Web/API/IDBFactory/open
tags:
  - API
  - Database
  - IDBFactory
  - IndexedDB
  - Method
  - Reference
  - Storage
  - open
browser-compat: api.IDBFactory.open
---
{{APIRef("IndexedDB")}}

The **`open()`** method of the {{domxref("IDBFactory")}}
interface requests opening a [connection to a database](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#database_connection).

The method returns an {{domxref("IDBOpenDBRequest")}} object immediately, and
performs the open operation asynchronously. If the operation is successful, a
`success` event is fired on the request object that is returned from this
method, with its `result` attribute set to the new
{{domxref("IDBDatabase")}} object for the connection.

May trigger `upgradeneeded`, `blocked` or
`versionchange` events.

{{AvailableInWorkers}}

## Syntax

For the current standard:

```js
var IDBOpenDBRequest = indexedDB.open(name);
var IDBOpenDBRequest = indexedDB.open(name, version);
```

### Parameters

- name
  - : The name of the database.
- version {{optional_inline}}
  - : Optional. The version to open the database with. If the version is not provided and
    the database exists, then a connection to the database will be opened without changing
    its version. If the version is not provided and the database does not exist, then it
    will be created with version `1`.

#### Experimental Gecko options object

- options (version and storage) {{optional_inline}} {{deprecated_inline}}

  - : In Gecko, since [version 26](/en-US/docs/Mozilla/Firefox/Releases/26), you can include
    a non-standard `options` object as a parameter of {{
    domxref("IDBFactory.open") }} that contains the `version` number of the
    database, plus a storage value that specifies whether you want to
    use `persistent` or `temporary` storage.

    > **Warning:** The `storage` attribute is
    > deprecated and will soon be removed from Gecko. You should use
    > {{domxref("StorageManager.persist()")}} to get persistent storage instead.

> **Note:** You can find out more information on the different available
> storage types, and how Firefox handles client-side data storage, at [Browser
> storage limits and eviction criteria](/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria).

### Return value

A {{domxref("IDBOpenDBRequest")}} object on which subsequent events related to this
request are fired.

### Exceptions

This method may raise a {{domxref("DOMException")}} of the following types:

| Exception   | Description                                                        |
| ----------- | ------------------------------------------------------------------ |
| `TypeError` | The value of version is zero or a negative number or not a number. |

## Example

Example of calling `open` with the current specification's
`version` parameter:

```js
var request = window.indexedDB.open("toDoList", 4);
```

In the following code snippet, we make a request to open a database, and include
handlers for the success and error cases. For a full working example, see our [To-do
Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) app ([view example live](https://mdn.github.io/to-do-notifications/).)

```js
var note = document.querySelector("ul");

// In the following line, you should include the prefixes
// of implementations you want to test.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla has never prefixed these objects, so we don't
//  need window.mozIDB*)

// Let us open version 4 of our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened
// successfully, or not
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '<li>Error loading database.</li>';
};

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Database initialised.</li>';

  // store the result of opening the database in the db
  // variable. This is used a lot later on, for opening
  // transactions and suchlike.
  db = DBOpenRequest.result;
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
