---
title: IDBRequest.result
slug: Web/API/IDBRequest/result
page-type: web-api-instance-property
tags:
  - API
  - Database
  - IDBRequest
  - IndexedDB
  - Property
  - Reference
  - Storage
  - result
browser-compat: api.IDBRequest.result
---
{{ APIRef("IndexedDB") }}

The **`result`** read-only property of the
{{domxref("IDBRequest")}} interface returns the result of the request. If the request
failed and the result is not available, an `InvalidStateError` exception is
thrown.

{{AvailableInWorkers}}

## Value

any

## Examples

The following example requests a given record title, `onsuccess` gets the
associated record from the {{domxref("IDBObjectStore")}} (made available
as `objectStoreTitleRequest.result`), updates
one property of the record, and then puts the updated record back into the object
store. For a full working example, see our [To-do Notifications](https://github.com/mdn/to-do-notifications/) app ([View the example live](https://mdn.github.io/to-do-notifications/)>.)

```js
const title = "Walk dog";

// Open up a transaction as usual
const objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

// Get the to-do list object that has this title as it's title
const objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = () => {
  // Grab the data object returned as the result
  const data = objectStoreTitleRequest.result;

  // Update the notified value in the object to "yes"
  data.notified = "yes";

  // Create another request that inserts the item
  // back into the database
  const updateTitleRequest = objectStore.put(data);

  // When this new request succeeds, run the displayData()
  // function again to update the display
  updateTitleRequest.onsuccess = () => {
    displayData();
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
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([View the example live](https://mdn.github.io/to-do-notifications/)).
