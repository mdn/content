---
title: IDBObjectStore.getAllKeys()
slug: Web/API/IDBObjectStore/getAllKeys
page-type: web-api-instance-method
tags:
  - API
  - IDBObjectStore
  - IndexedDB
  - Method
  - Reference
  - Storage
browser-compat: api.IDBObjectStore.getAllKeys
---
{{ APIRef("IndexedDB") }}

The `getAllKeys()` method of the {{domxref("IDBObjectStore")}}
interface returns an {{domxref("IDBRequest")}} object retrieves record keys for all
objects in the object store matching the specified parameter or all objects in the
store if no parameters are given.

If a value is successfully found, then a structured clone of it is created and set as
the result of the request object.

This method produces the same result for:

- a record that doesn't exist in the database
- a record that has an undefined value

To tell these situations apart, you need to call the
{{domxref("IDBObjectStore.openCursor","openCursor()")}} method with the same key. That
method provides a cursor if the record exists, and no cursor if it does not.

## Syntax

```js
getAllKeys()
getAllKeys(query)
getAllKeys(query, count)
```

### Parameters

- *query* {{optional_inline}}
  - : A value that is or resolves to an {{domxref("IDBKeyRange")}}.
- *count* {{optional_inline}}
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
  - : Thrown if the key or key range provided contains an invalid key or is null.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("IDBObjectStore")}} has been deleted or removed.

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
