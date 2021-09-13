---
title: indexedDB
slug: Web/API/indexedDB
tags:
  - API
  - Database
  - IndexedDB
  - Property
  - Read-only
  - Reference
  - Storage
browser-compat: api.indexedDB
---
{{ APIRef() }}

The global **`indexedDB`** read-only property provides a mechanism for applications to
asynchronously access the capabilities of indexed databases.

## Syntax

```js
var IDBFactory = self.indexedDB;
```

### Value

An {{domxref("IDBFactory")}} object.

## Example

The following code creates a request for a database to be opened asynchronously, after
which the database is opened when the request's `onsuccess` handler is fired:

```js
var db;
function openDB() {
 var DBOpenRequest = window.indexedDB.open('toDoList');
 DBOpenRequest.onsuccess = function(e) {
   db = DBOpenRequest.result;
 }
}
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
