---
title: IDBRecord
slug: Web/API/IDBRecord
page-type: web-api-interface
browser-compat: api.IDBRecord
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

The **`IDBRecord`** interface of the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) represents a snapshot of a single record in an {{domxref("IDBObjectStore")}} or {{domxref("IDBIndex")}}.

A request for records using {{domxref("IDBObjectStore.getAllRecords()")}} or {{domxref("IDBIndex.getAllRecords()")}} returns an {{domxref("IDBRequest")}} instance.
On success, the returned object's {{domxref("IDBRequest.result", "result")}} property is populated with an array of `IDBRecord` instances.

## Instance properties

- `key` {{ReadOnlyInline}}
  - : A value representing the record's secondary key.
    For an object store record, this will be the same as `primaryKey`.
    For an index record, it will be the record's key within the index.
- `primaryKey` {{ReadOnlyInline}}
  - : A value representing the record's primary key.
    This key is used to represent the record in the {{domxref("IDBObjectStore")}}.
- `value` {{ReadOnlyInline}}
  - : A value representing the record's value.

## Instance methods

_None._

## Examples

### Basic usage

This example queries an {{domxref("IDBObjectStore")}} for up to 100 records whose keys come after `"myKey"`, with results sorted in reverse order.

The code first creates a transaction on an {{domxref("IDBDatabase")}} named `db` (omitting the code to open the database), and then uses it to get an `IDBObjectStore` containing a contacts list.
It then calls `getAllRecords()` on the object store, returning a {{domxref("IDBRequest")}} instance.
Event listeners are added to this request for the `success` and `error` events.
On success, the result `event.target.result` is logged (this is also available as `request.result`).
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

- {{domxref("IDBObjectStore.getAllRecords()")}}
- {{domxref("IDBIndex.getAllRecords()")}}
- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([View the example live](https://mdn.github.io/dom-examples/to-do-notifications/)).
