---
title: "IDBObjectStore: getKey() method"
short-title: getKey()
slug: Web/API/IDBObjectStore/getKey
page-type: web-api-instance-method
browser-compat: api.IDBObjectStore.getKey
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

The **`getKey()`** method of the
{{domxref("IDBObjectStore")}} interface returns an {{domxref("IDBRequest")}} object,
and, in a separate thread, returns the key selected by the specified query. This is
for retrieving specific records from an object store.

If a key is successfully found, then a structured clone of it is created and set as the
result of the request object.

## Syntax

```js-nolint
getKey(key)
```

### Parameters

- `key`
  - : The key or key range that identifies the record to be retrieved.

### Return Value

An {{domxref("IDBRequest")}} object on which subsequent events related to this operation are fired.

If the operation is successful, the value of the request's {{domxref("IDBRequest.result", "result")}} property is the key for the first record matching the given key or key range.

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("IDBObjectStore")}} has been deleted or removed.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if this {{domxref("IDBObjectStore")}}'s transaction is inactive.
- `DataError` {{domxref("DOMException")}}
  - : Thrown if the key or key range provided contains an invalid key.

## Example

```js
let openRequest = indexedDB.open("telemetry");
openRequest.onsuccess = (event) => {
  let db = event.target.result;
  let store = db.transaction("net-logs").objectStore("net-logs");

  let today = new Date();
  let yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  let request = store.getKey(IDBKeyRange(yesterday, today));
  request.onsuccess = (event) => {
    let when = event.target.result;
    alert(`The 1st activity in last 24 hours was occurred at ${when}`);
  };
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
