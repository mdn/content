---
title: IDBDatabase.deleteObjectStore()
slug: Web/API/IDBDatabase/deleteObjectStore
page-type: web-api-instance-method
tags:
  - API
  - Database
  - IDBDatabase
  - IndexedDB
  - Method
  - Reference
  - Storage
browser-compat: api.IDBDatabase.deleteObjectStore
---
{{ APIRef("IndexedDB") }}

The **`deleteObjectStore()`** method of the
{{domxref("IDBDatabase")}} interface destroys the object store with the given name in
the connected database, along with any indexes that reference it.

As with {{ domxref("IDBDatabase.createObjectStore") }}, this method can be called
_only_ within a [`versionchange`](/en-US/docs/Web/API/IDBTransaction#version_change)
transaction.

{{AvailableInWorkers}}

## Syntax

```js
deleteObjectStore(name)
```

### Parameters

- `name`
  - : The name of the object store you want to delete. Names are
        case sensitive.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the method was not called from a `versionchange` transaction callback.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if a request is made on a source database that doesn't exist (E.g. has been deleted or removed.)
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown when trying to delete an object store that does not exist.

## Examples

```js
const dbName = "sampleDB";
const dbVersion = 2;
const request = indexedDB.open(dbName, dbVersion);

request.onupgradeneeded = (event) => {
  const db = request.result;
  if (event.oldVersion < 1) {
    db.createObjectStore("store1");
  }

  if (event.oldVersion < 2) {
    db.deleteObjectStore("store1");
    db.createObjectStore("store2");
  }

  // etc. for version < 3, 4…
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
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/).)
