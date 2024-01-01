---
title: "IDBObjectStore: count() method"
short-title: count()
slug: Web/API/IDBObjectStore/count
page-type: web-api-instance-method
browser-compat: api.IDBObjectStore.count
---

{{ APIRef("IndexedDB") }}

The **`count()`** method of the {{domxref("IDBObjectStore")}}
interface returns an {{domxref("IDBRequest")}} object, and, in a separate thread,
returns the total number of records that match the provided key or
{{domxref("IDBKeyRange")}}. If no arguments are provided, it returns the total number
of records in the store.

{{AvailableInWorkers}}

## Syntax

```js-nolint
count()
count(query)
```

### Parameters

- `query` {{optional_inline}}
  - : A key or {{domxref("IDBKeyRange")}} object that specifies a range of records you
    want to count.

### Return value

An {{domxref("IDBRequest")}} object on which subsequent events related to this operation are fired.

If the operation is successful, the value of the request's {{domxref("IDBRequest.result", "result")}} property is the number of records that match the given query.

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if this {{domxref("IDBObjectStore")}} has been deleted.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if this {{domxref("IDBObjectStore")}}'s transaction is inactive.
- `DataError` {{domxref("DOMException")}}
  - : Thrown if the specified key or key range is invalid.

## Examples

In this simple fragment we create a transaction, retrieve an object store, then count
the number of records in the store using `count()` — when the success handler
fires, we log the count value (an integer) to the console.

```js
const transaction = db.transaction(["fThings"], "readonly");
const objectStore = transaction.objectStore("fThings");

const countRequest = objectStore.count();
countRequest.onsuccess = () => {
  console.log(countRequest.result);
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
