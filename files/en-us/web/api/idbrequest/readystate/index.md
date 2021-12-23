---
title: IDBRequest.readyState
slug: Web/API/IDBRequest/readyState
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

The **`readyState`** read-only property of the
{{domxref("IDBRequest")}} interface returns the state of the request.

\>Every request starts in the `pending` state. The state changes to
`done` when the request completes successfully or when an error
occurs.

{{AvailableInWorkers}}

## Syntax

```js
var currentReadyState = request.readyState;
```

### Value

The {{domxref("IDBRequestReadyState")}} of the request, which takes one of the
following two values:

| Value     | Meaning                 |
| --------- | ----------------------- |
| `pending` | The request is pending. |
| `done`    | The request is done.    |

## Example

The following example requests a given record title, `onsuccess` gets the
associated record from the {{domxref("IDBObjectStore")}} (made available
as `objectStoreTitleRequest.result`), updates
one property of the record, and then puts the updated record back into the object
store in another request. The `readyState` of the 2nd request is logged to
the developer console. For a full working example, see our
[To-do Notifications](https://github.com/mdn/to-do-notifications/) app
([view example live](https://mdn.github.io/to-do-notifications/).)

```js
var title = "Walk dog";

// Open up a transaction as usual
var objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

// Get the to-do list object that has this title as it's title
var objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = function() {
  // Grab the data object returned as the result
  var data = objectStoreTitleRequest.result;

  // Update the notified value in the object to "yes"
  data.notified = "yes";

  // Create another request that inserts the item
  // back into the database
  var updateTitleRequest = objectStore.put(data);

  // Log the source of this request
  console.log("The readyState of this request is " + updateTitlerequest.readyState);

  // When this new request succeeds, run the displayData()
  // function again to update the display
  updateTitleRequest.onsuccess = function() {
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
- Reference example: [To-do
  Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/).)
