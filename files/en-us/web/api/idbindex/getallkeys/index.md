---
title: "IDBIndex: getAllKeys() method"
short-title: getAllKeys()
slug: Web/API/IDBIndex/getAllKeys
page-type: web-api-instance-method
browser-compat: api.IDBIndex.getAllKeys
---

{{ APIRef("IndexedDB") }}

The **`getAllKeys()`** method of the {{domxref("IDBIndex")}}
interface asynchronously retrieves the primary keys of all objects inside the index,
setting them as the `result` of the request object.

## Syntax

```js-nolint
getAllKeys()
getAllKeys(query)
getAllKeys(query, count)
getAllKeys(options)
```

### Parameters

The `getAllKeys()` method can take separate parameters or a single options object containing the parameters as properties.

The parameters can include:

- `query` {{optional_inline}}
  - : A key or an {{domxref("IDBKeyRange")}} identifying the keys to retrieve. If this value is `null` or not specified, the browser will use an unbound key range.
- `count` {{optional_inline}}
  - : The number records to return. If this value exceeds the number of records in the
    query, the browser will only retrieve the first item. If it is lower than
    `0` or greater than `2^32 - 1` a {{jsxref("TypeError")}}
    exception will be thrown.

If an object parameter is specified, its properties can include:

- `query` {{optional_inline}}
  - : See the earlier [`query`](#query) definition.
- `count` {{optional_inline}}
  - : See the earlier [`count`](#count) definition.
- `direction` {{optional_inline}}
  - : An enumerated value specifying the direction in which the objects are traversed. Possible values are:
    - `next`
      - : The objects are traversed from the beginning, in increasing key order. This is the default value.
    - `nextunique`
      - : The objects are traversed from the beginning, in increasing key order. Keys duplicated across multiple objects are only yielded once.
    - `prev`
      - : The objects are traversed from the end, in decreasing key order.
    - `prevunique`
      - : The objects are traversed from the end, in decreasing key order. Keys duplicated across multiple objects are only yielded once.

### Return value

An {{domxref("IDBRequest")}} object on which subsequent events related to this operation are fired.

If the operation is successful, the value of the request's {{domxref("IDBRequest.result", "result")}} property is an {{jsxref("Array")}} of the keys for all records matching the given query, up to the value of `count`, if `count` was supplied.

### Exceptions

This method may raise a {{domxref("DOMException")}} of the following types:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if this {{domxref("IDBIndex")}}'s transaction is inactive.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("IDBIndex")}} has been deleted or removed.
- {{jsxref("TypeError")}} {{domxref("DOMException")}}
  - : Thrown if the [`count`](#count) parameter is not between `0` and `2^32 - 1`, inclusive.

## Examples

```js
const myIndex = objectStore.index("index");
const getAllKeysRequest = myIndex.getAllKeys();
getAllKeysRequest.onsuccess = () => {
  console.log(getAllKeysRequest.result);
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
