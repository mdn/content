---
title: IDBRecord
slug: Web/API/IDBRecord
page-type: web-api-interface
browser-compat: api.IDBRecord
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

The **`IDBRecord`** interface of the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) represents a snapshot of a single record in an {{domxref("IDBObjectStore")}} or {{domxref("IDBIndex")}}.

A request for records using {{domxref("IDBObjectStore.getAllRecords()")}} or {{domxref("IDBIndex.getAllRecords()")}} returns a {{domxref("IDBRequest")}} instance.
On success the returned object's {{domxref("IDBRequest.result", "result")}} method is populated with an array of `IDBRecord` instances.

## Instance properties

- `key` {{ReadOnlyInline}}
  - : A value representing the record's key.
    For an object store record this will be the same as `primaryKey`.
    For an index record it will be the record's key within the index.
- `primaryKey` {{ReadOnlyInline}}
  - : A value representing the key of the record in the index's associated {{domxref("IDBObjectStore")}}.
- `value` {{ReadOnlyInline}}
  - : A value representing the record's value.

## Instance methods

_None._

## Example

In the following code snippet, we open a database asynchronously and make a request; `onerror` and `onsuccess` functions are included to handle the success and error cases.
For a full working example, see our [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)

```js
const query = IDBKeyRange.lowerBound("myKey", true);
const objectStore = transaction.objectStore("contactsList");

const myRecords = (objectStore.getAllRecords({
  query,
  count: "100",
  direction: "prev",
}).onsuccess = (event) => {
  console.log(myRecords.result); // Array of IDBRecord instances
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
