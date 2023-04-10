---
title: "IDBIndex: getAll() method"
short-title: getAll()
slug: Web/API/IDBIndex/getAll
page-type: web-api-instance-method
browser-compat: api.IDBIndex.getAll
---

{{ APIRef("IndexedDB") }}

The **`getAll()`** method of the {{domxref("IDBIndex")}}
interface retrieves all objects that are inside the index.

There is a performance cost associated with looking at the `value` property
of a cursor, because the object is created lazily. To use a feature
like `getAll()`, the browser has to create all the objects at once. If you
are just interested in looking at each of the keys, for instance, it is more efficient
to use a [cursor](/en-US/docs/Web/API/IDBCursor). If you are trying to get an
array of all the objects in an object store, though, you should
use `getAll()`.

## Syntax

```js-nolint
getAll()
getAll(query)
getAll(query, count)
```

### Parameters

- `query` {{optional_inline}}
  - : A key or an {{domxref("IDBKeyRange")}} identifying the records to retrieve. If this
    value is null or missing, the browser will use an unbound key range.
- `count` {{optional_inline}}
  - : The number of records to return. If this value exceeds the number of records in the
    query, the browser will only retrieve the queried records. If it is lower than
    `0` or greater than `2^32 - 1` a {{jsxref("TypeError")}}
    exception will be thrown.

### Return value

An {{domxref("IDBRequest")}} object on which subsequent events related to this operation are fired.

If the operation is successful, the value of the request's {{domxref("IDBRequest.result", "result")}} property is an {{jsxref("Array")}} of the values of all records matching the given query, up to the value of `count`, if `count` was supplied.

### Exceptions

This method may raise a {{domxref("DOMException")}} of the following types:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if this {{domxref("IDBIndex")}}'s transaction is inactive.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("IDBIndex")}} has been deleted or removed.

A {{jsxref("TypeError")}} exception is thrown if the `count` parameter is
not between `0` and `2^32> - 1` included.

## Examples

```js
const myIndex = objectStore.index("index");
const getAllRequest = myIndex.getAll();
getAllRequest.onsuccess = () => {
  console.log(getAllRequest.result);
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
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([View the example live](https://mdn.github.io/dom-examples/to-do-notifications/)).
