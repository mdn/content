---
title: "IDBIndex: getAllRecords() method"
short-title: getAllRecords()
slug: Web/API/IDBIndex/getAllRecords
page-type: web-api-instance-method
browser-compat: api.IDBIndex.getAllRecords
---

{{ APIRef("IndexedDB") }}

The **`getAllRecords()`** method of the {{domxref("IDBIndex")}}
interface retrieves all records (including index keys, primary keys, and values) from the index.

`getAllRecords()` effectively combines the functionality of {{domxref("IDBIndex.getAllKeys", "getAllKeys()")}} and {{domxref("IDBIndex.getAll", "getAll()")}} by enumerating both primary keys and values at the same time. This combined operation enables certain data retrieval patterns to be significantly faster than alternatives such as iteration with cursors.

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
  - : An enumerated value specifying the direction in which the records are traversed. Possible values are:
    - `next`
      - : The records are traversed from the beginning, in increasing key order. This is the default value.
    - `nextunique`
      - : The records are traversed from the beginning, in increasing key order. For every key with duplicate records, only the record closest to the start is yielded.
    - `prev`
      - : The records are traversed from the end, in decreasing key order.
    - `prevunique`
      - : The records are traversed from the end, in decreasing key order. For every key with duplicate records, only the record closest to the start is yielded.

### Return value

An {{domxref("IDBRequest")}} object on which subsequent events related to this operation are fired.

If the operation is successful, the value of the request's {{domxref("IDBRequest.result", "result")}} property is an {{jsxref("Array", "array")}} of objects representing all the records that match the given query, up to the number specified by `count` (if provided).

Each object contains the following properties:

- `key`
  - : A value representing the record's key.
- `primaryKey`
  - : A value representing the key of the record in the index's associated {{domxref("IDBObjectStore")}}.
- `value`
  - : A value representing the record's value.

### Exceptions

This method may raise a {{domxref("DOMException")}} of the following types:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("IDBIndex")}} or its associated {{domxref("IDBObjectStore")}} has been deleted or removed.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if this {{domxref("IDBIndex")}}'s transaction is inactive.
- {{jsxref("TypeError")}} {{domxref("DOMException")}}
  - : Thrown if the [`count`](#count) parameter is not between `0` and `2^32 - 1` included.

## Examples

```js
const query = IDBKeyRange.lowerBound("mykey", true);
const objectStore = transaction.objectStore("contactsList");
const myIndex = objectStore.index("lastName");

const myRecords = (myIndex.getAllRecords({
  query,
  count: "100",
  direction: "prev",
}).onsuccess = (event) => {
  console.log("Records successfully retrieved");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("IDBIndex.getAll()")}}, {{domxref("IDBIndex.getAllKeys()")}}
- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- [Faster IndexedDB reads with getAllRecords() example](https://microsoftedge.github.io/Demos/idb-getallrecords/) from Microsoft, 2025
