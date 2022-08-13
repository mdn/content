---
title: IDBRequest.readyState
slug: Web/API/IDBRequest/readyState
page-type: web-api-instance-property
tags:
  - API
  - Database
  - IDBRequest
  - IndexedDB
  - Property
  - Reference
  - Storage
  - readyState
browser-compat: api.IDBRequest.readyState
---
{{ APIRef("IndexedDB") }}

The **`readyState`** read-only property of the
{{domxref("IDBRequest")}} interface returns the state of the request.

Every request starts in the `pending` state. The state changes to
`done` when the request completes successfully or when an error
occurs.

{{AvailableInWorkers}}

## Value

One of the following strings:

- `pending`
  - : Returned if the request is still ongoing.
- `done`
  - : Returned if the request has already completed.

## Examples

The following example requests a given record title, `onsuccess` gets the
associated record from the {{domxref("IDBObjectStore")}} (made available
as `objectStoreTitleRequest.result`), updates
one property of the record, and then puts the updated record back into the object
store in another request. The `readyState` of the 2nd request is logged to
the developer console. For a full working example, see our
[To-do Notifications](https://github.com/mdn/to-do-notifications/) app
([View the example live](https://mdn.github.io/to-do-notifications/)).

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

  // Log the source of this request
  console.log(`The readyState of this request is ${updateTitleRequest.readyState}`);

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
