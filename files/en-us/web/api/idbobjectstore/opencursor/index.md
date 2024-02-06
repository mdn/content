---
title: "IDBObjectStore: openCursor() method"
short-title: openCursor()
slug: Web/API/IDBObjectStore/openCursor
page-type: web-api-instance-method
browser-compat: api.IDBObjectStore.openCursor
---

{{ APIRef("IndexedDB") }}

The **`openCursor()`** method of the
{{domxref("IDBObjectStore")}} interface returns an {{domxref("IDBRequest")}} object,
and, in a separate thread, returns a new {{domxref("IDBCursorWithValue")}} object.
Used for iterating through an object store with a cursor.

To determine if the add operation has completed successfully, listen for the results's
`success` event.

{{AvailableInWorkers}}

## Syntax

```js-nolint
openCursor()
openCursor(query)
openCursor(query, direction)
```

### Parameters

- `query` {{optional_inline}}
  - : A key or {{domxref("IDBKeyRange")}} to be queried. If a single valid key is passed,
    this will default to a range containing only that key. If nothing is passed, this will
    default to a key range that selects all the records in this object store.
- `direction` {{optional_inline}}
  - : A string telling the cursor which direction to travel. The default is `next`. Valid values are:
    - `next`
      - : The cursor is opened at the start of the store; then, the cursor returns all records, even duplicates,
        in the increasing order of keys.
    - `nextunique`
      - : The cursor is opened at the start of the store; then, the cursor returns all records, that are not duplicates,
        in the increasing order of keys.
    - `prev`
      - : The cursor is opened at the start of the store; then, the cursor returns all records, even duplicates,
        in the decreasing order of keys.
    - `prevunique`
      - : The cursor is opened at the start of the store; then, the cursor returns all records, that are not duplicates,
        in the decreasing order of keys.

### Return value

An {{domxref("IDBRequest")}} object on which subsequent events related to this operation are fired.

If the operation is successful, the value of the request's {{domxref("IDBRequest.result", "result")}} property is:

- an {{domxref("IDBCursorWithValue")}} object pointing at the first record matching the given query
- `null` if no matching records were found.

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if this {{domxref("IDBObjectStore")}} or {{domxref("IDBIndex")}} has been deleted.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if this {{domxref("IDBObjectStore")}}'s transaction is inactive.
- `DataError` {{domxref("DOMException")}}
  - : Thrown if the specified key or key range is invalid.

## Examples

In this simple fragment we create a transaction, retrieve an object store, then use a
cursor to iterate through all the records in the object store:

```js
const transaction = db.transaction("name", "readonly");
const objectStore = transaction.objectStore("name");
const request = objectStore.openCursor();
request.onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // cursor.value contains the current record being iterated through
    // this is where you'd do something with the result
    cursor.continue();
  } else {
    // no more results
  }
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
