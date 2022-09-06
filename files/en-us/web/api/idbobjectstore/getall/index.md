---
title: IDBObjectStore.getAll()
slug: Web/API/IDBObjectStore/getAll
page-type: web-api-instance-method
tags:
  - API
  - Database
  - IDBObjectStore
  - IndexedDB
  - Method
  - Reference
  - Storage
  - getAll
browser-compat: api.IDBObjectStore.getAll
---
{{ APIRef("IndexedDB") }}

The **`getAll()`** method of the
{{domxref("IDBObjectStore")}} interface returns an {{domxref("IDBRequest")}} object
containing all objects in the object store matching the specified parameter or all
objects in the store if no parameters are given.

If a value is successfully found, then a structured clone of it is created and set as
the result of the request object.

This method produces the same result for:

- a record that doesn't exist in the database
- a record that has an undefined value

To tell these situations apart, you either call

1. the {{domxref("IDBObjectStore.openCursor","openCursor()")}} method with the same
    key. That method provides a cursor if the record exists, and no cursor if it does not.
2. the {{domxref("IDBObjectStore.count","count()")}} method with the same key, which
    will return 1 if the row exists and 0 if it doesn't.

## Syntax

```js
getAll()
getAll(query)
getAll(query, count)
```

### Parameters

- `query` {{optional_inline}}
  - : A key or {{domxref("IDBKeyRange")}} to be queried. If nothing is passed, this will
    default to a key range that selects all the records in this object store.
- `count` {{optional_inline}}
  - : Specifies the number of values to return if more than one is found. If it is lower
    than `0` or greater than `2^32 - 1` a
    {{jsxref("TypeError")}} exception will be thrown.

### Return value

An {{domxref("IDBRequest")}} object on which subsequent events related to this
operation are fired.

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if this {{domxref("IDBObjectStore")}}'s transaction is inactive.
- `DataError` {{domxref("DOMException")}}
  - : Thrown if key or key range provided contains an invalid key or is null.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("IDBObjectStore")}} has been deleted or removed.
- {{jsxref("TypeError")}}
  - : Thrown if the `count` parameter is not between `0` and `2^32 - 1` included.

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
