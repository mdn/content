---
title: "IDBObjectStore: getAllRecords() method"
short-title: getAllRecords()
slug: Web/API/IDBObjectStore/getAllRecords
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.IDBObjectStore.getAllRecords
---

{{ APIRef("IndexedDB") }}{{SeeCompatTable}}

The **`getAllRecords()`** method of the {{domxref("IDBObjectStore")}} interface retrieves all records (including primary keys and values) from the object store.

`getAllRecords()` effectively combines the functionality of {{domxref("IDBObjectStore.getAllKeys", "getAllKeys()")}} and {{domxref("IDBObjectStore.getAll", "getAll()")}} by enumerating both primary keys and values at the same time.
This combined operation enables certain data retrieval patterns to be significantly faster than alternatives such as iteration with cursors.

## Syntax

```js-nolint
getAllRecords()
getAllRecords(options)
```

### Parameters

An options object whose properties can include:

- `query` {{optional_inline}}
  - : A key or an {{domxref("IDBKeyRange")}} identifying the records to retrieve. If this value is `null` or not specified, the browser will use an unbound key range.
- `count` {{optional_inline}}
  - : The number of records to return. If this value exceeds the number of records in the query, the browser will retrieve only the queried records. If the value is less than `0` or greater than `2^32 - 1`, a {{jsxref("TypeError")}} exception will be thrown.
- `direction` {{optional_inline}}
  - : An enumerated value specifying the direction in which the records are traversed, which in turn defines the order in which they are returned. Possible values are:
    - `next`
      - : The records are traversed from the beginning, in increasing key order. This is the default value.
    - `nextunique`
      - : The records are traversed from the beginning, in increasing key order. This will yield the same records as `next`, because duplicate keys are not allowed in `IDBObjectStore`s.
    - `prev`
      - : The records are traversed from the end, in decreasing key order.
    - `prevunique`
      - : The records are traversed from the end, in decreasing key order. This will yield the same records as `prev`, because duplicate keys are not allowed in `IDBObjectStore`s.

### Return value

An {{domxref("IDBRequest")}} object on which subsequent events related to this operation are fired.

If the operation is successful, the value of the request's {{domxref("IDBRequest.result", "result")}} property is an {{jsxref("Array", "array")}} of {{domxref("IDBRecord")}} instances representing all records that match the given query, up to the number specified by `count` (if provided).

Each {{domxref("IDBRecord")}} instance contains the following properties:

- `key`
  - : A value representing the record's key.
    This is identical to the `primaryKey` property.
- `primaryKey`
  - : The record's primary key.
- `value`
  - : A value representing the record's value.

### Exceptions

This method may raise a {{domxref("DOMException")}} of the following types:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("IDBObjectStore")}} has been deleted or removed.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if this {{domxref("IDBObjectStore")}}'s transaction is inactive.
- {{jsxref("TypeError")}} {{domxref("DOMException")}}
  - : Thrown if the [`count`](#count) parameter is not between `0` and `2^32 - 1`, inclusive.

## Examples

### Basic usage

This example queries an {{domxref("IDBObjectStore")}} for up to 100 records whose keys come after `"myKey"`, with results sorted in reverse order.

The code first creates a transaction on an {{domxref("IDBDatabase")}} named `db` (omitting the code to open the database), and then uses it to get an `IDBObjectStore` containing a contacts list.
It then calls `getAllRecords()` on the object store, returning a {{domxref("IDBRequest")}} instance.
Event listeners are added to this request for the `success` and `error` events.
On success, the result `event.target.result` is logged (this also available as `request.result`).
This result contains an array of `IDBRecord` instances.
Note that because this is a query on an `IDBObjectStore`, the `key` and `primaryKey` in each record have the same value.

```js
// Create a transaction on the database and use it to get the contained store
const transaction = db.transaction(["contactsList"], "readonly");
const objectStore = transaction.objectStore("contactsList");

const query = IDBKeyRange.lowerBound("myKey", true);

const request = objectStore.getAllRecords({
  query,
  count: 100,
  direction: "prev",
});

request.addEventListener("success", (event) => {
  const myRecords = event.target.result; // Array of IDBRecord instances
  console.log(myRecords);
});

request.addEventListener("error", (event) => {
  console.error("Error retrieving records:", event.target.error);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("IDBObjectStore.getAll()")}}, {{domxref("IDBObjectStore.getAllKeys()")}}
- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- [Faster IndexedDB reads with getAllRecords() example](https://microsoftedge.github.io/Demos/idb-getallrecords/) from Microsoft, 2025
