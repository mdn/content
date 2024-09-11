---
title: "Window: indexedDB property"
short-title: indexedDB
slug: Web/API/Window/indexedDB
page-type: web-api-instance-property
browser-compat: api.indexedDB
---

{{APIRef("IndexedDB")}}

The **`indexedDB`** read-only property of the {{domxref("Window")}} interface provides a mechanism for applications to
asynchronously access the capabilities of indexed databases.

## Value

An {{domxref("IDBFactory")}} object.

## Examples

The following code creates a request for a database to be opened asynchronously, after
which the database is opened when the request's `onsuccess` handler is fired:

```js
let db;
function openDB() {
  const DBOpenRequest = window.indexedDB.open("toDoList");
  DBOpenRequest.onsuccess = (e) => {
    db = DBOpenRequest.result;
  };
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
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([View the example live](https://mdn.github.io/dom-examples/to-do-notifications/)).
