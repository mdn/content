---
title: IDBIndex.getAll()
slug: Web/API/IDBIndex/getAll
tags:
  - API
  - IDBIndex
  - IndexedDB
  - Method
  - Reference
  - Storage
browser-compat: api.IDBIndex.getAll
---
{{ APIRef("IndexedDB") }}

The **`getAll()`** method of the {{domxref("IDBIndex")}}
interface retrieves all objects that are inside the index.

There is a performance cost associated with looking at the `value` property
of a cursor, because the object is created lazily. To use a feature
like `getAll()`, the browser has to create all the objects at once. If you
are just interested in looking at each of the keys, for instance, it is more efficient
to use a [cursor](/en-US/docs/Web/API/IDBCursor). If you are trying to get an
array of all the objects in an object store, though, you should
use `getAll()`.

## Syntax

```js
var getAllKeysRequest = IDBIndex.getAll();
var getAllKeysRequest = IDBIndex.getAll(query);
var getAllKeysRequest = IDBIndex.getAll(query, count);
```

### Parameters

- *query* {{optional_inline}}
  - : A key or an {{domxref("IDBKeyRange")}} identifying the records to retrieve. If this
    value is null or missing, the browser will use an unbound key range.
- _count_ {{optional_inline}}
  - : The number of records to return. If this value exceeds the number of records in the
    query, the browser will only retrieve the queried records. If it is lower than
    `0` or greater than `2^32 - 1` a {{jsxref("TypeError")}}
    exception will be thrown.

### Return value

An {{domxref("IDBRequest")}} object on which subsequent events related to this
operation are fired.

### Exceptions

This method may raise a {{domxref("DOMException")}} of the following types:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if this {{domxref("IDBIndex")}}'s transaction is inactive.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("IDBIndex")}} has been deleted or removed.

A {{jsxref("TypeError")}} exception is thrown if the `count` parameter is
not between `0` and `2^32> - 1` included.
## Example

```js
var myIndex = objectStore.index('index');
var getAllRequest = myIndex.getAll();
getAllRequest.onsuccess = function() {
  console.log(getAllRequest.result);
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
