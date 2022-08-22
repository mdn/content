---
title: IDBIndex.getAllKeys()
slug: Web/API/IDBIndex/getAllKeys
page-type: web-api-instance-method
tags:
  - API
  - IDBIndex
  - IndexedDB
  - Method
  - Reference
browser-compat: api.IDBIndex.getAllKeys
---
{{ APIRef("IndexedDB") }}

The **`getAllKeys()`** method of the {{domxref("IDBIndex")}}
interface asynchronously retrieves the primary keys of all objects inside the index,
setting them as the `result` of the request object.

## Syntax

```js
getAllKeys()
getAllKeys(query)
getAllKeys(query, count)
```

### Parameters

- `query` {{optional_inline}}
  - : A key or an {{domxref("IDBKeyRange")}} identifying the keys to retrieve. If this
    value is null or missing, the browser will use an unbound key range.
- `count` {{optional_inline}}
  - : The number records to return. If this value exceeds the number of records in the
    query, the browser will only retrieve the first item. If it is lower than
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
not between `0` and `2^32 - 1` included.

## Examples

```js
const myIndex = objectStore.index('index');
const getAllKeysRequest = myIndex.getAllKeys();
getAllKeysRequest.onsuccess = () => {
  console.log(getAllKeysRequest.result);
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
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([View the example live](https://mdn.github.io/to-do-notifications/)).
