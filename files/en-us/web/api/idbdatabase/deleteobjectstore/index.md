---
title: IDBDatabase.deleteObjectStore()
slug: Web/API/IDBDatabase/deleteObjectStore
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
{{domxref("IDBDatabase")}} interface destroys the object store with the given name in
the connected database, along with any indexes that reference it.

As with {{ domxref("IDBDatabase.createObjectStore") }}, this method can be called
_only_ within a [`versionchange`](/en-US/docs/Web/API/IDBTransaction#version_change)
transaction.

{{AvailableInWorkers}}

## Syntax

```js
dbInstance.deleteObjectStore(name);
```

### Parameters

- `name`
  - : The name of the object store you want to delete.

### Exceptions

This method may raise a {{domxref("DOMException")}}  of one of the following types:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>
        Occurs if the method was not called from
        a <code>versionchange</code> transaction callback. For older WebKit
        browsers, you must call
        {{ APIRef("IDBVersionChangeRequest.setVersion")}} first.
      </td>
    </tr>
    <tr>
      <td><code>TransactionInactiveError</code></td>
      <td>
        Occurs if a request is made on a source database that doesn't exist
        (e.g. has been deleted or removed.) In Firefox previous to version 41,
        an <code>InvalidStateError</code> was raised in this case as well, which
        was misleading; this has now been fixed (see {{Bug("1176165")}}.)
      </td>
    </tr>
    <tr>
      <td><code>NotFoundError</code></td>
      <td>
        You are trying to delete an object store that does not exist. Names are
        case sensitive.
      </td>
    </tr>
  </tbody>
</table>

## Example

```js
var dbName = "sampleDB";
var dbVersion = 2;
var request = indexedDB.open(dbName, dbVersion);

request.onupgradeneeded = function(e) {
  var db = request.result;
  if (e.oldVersion < 1) {
    db.createObjectStore("store1");
  }

  if (e.oldVersion < 2) {
    db.deleteObjectStore("store1");
    db.createObjectStore("store2");
  }

  // etc. for version < 3, 4...
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
