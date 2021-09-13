---
title: IDBObjectStore.openKeyCursor()
slug: Web/API/IDBObjectStore/openKeyCursor
tags:
  - API
  - Database
  - IDBObjectStore
  - Method
  - Reference
  - Storage
  - openKeyCursor
browser-compat: api.IDBObjectStore.openKeyCursor
---
{{ APIRef("IndexedDB") }}

The **`openKeyCursor()`** method of the
{{domxref("IDBObjectStore")}} interface returns an {{domxref("IDBRequest")}} object
whose result will be set to an {{domxref("IDBCursor")}} that can be used to iterate
through matching results. Used for iterating through the keys of an object store with
a cursor.

To determine if the add operation has completed successfully, listen for the
results’s `success` event.

## Syntax

```js
var request = objectStore.openKeyCursor();
var request = objectStore.openKeyCursor(query);
var request = objectStore.openKeyCursor(query, direction);
```

### Parameters

- *query* {{optional_inline}}
  - : The key range to be queried. If a single valid key is passed, this will default to a
    range containing only that key. If nothing is passed, this will default to a key range
    that selects all the records in this object store.
- *direction* {{optional_inline}}
  - : An [`IDBCursorDirection`](https://w3c.github.io/IndexedDB/#enumdef-idbcursordirection) telling the cursor what direction to travel.
    Valid values are `"next"`, `"nextunique"`, `"prev"`,
    and `"prevunique"`. The default is `"next"`.

### Return value

An {{domxref("IDBRequest")}} object on which subsequent events related to this
operation are fired.

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

| Exception                  | Description                                                                                         |
| -------------------------- | --------------------------------------------------------------------------------------------------- |
| `InvalidStateError`        | This {{domxref("IDBObjectStore")}} or {{domxref("IDBIndex")}} has been deleted. |
| `TransactionInactiveError` | This {{domxref("IDBObjectStore")}}'s transaction is inactive.                            |
| `DataError`                | The specified key or key range is invalid.                                                          |

## Example

In this simple fragment we create a transaction, retrieve an object store, then use a
cursor to iterate through all the records in the object store:

```js
var transaction = db.transaction("name", "readonly");
var objectStore = transaction.objectStore("name");
var request = objectStore.openKeyCursor();
request.onsuccess = function(event) {
  var cursor = event.target.result;
  if(cursor) {
    // cursor.key contains the key of the current record being iterated through
    // note that there is no cursor.value, unlike for openCursor
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
- Reference example: [To-do
  Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/).)
