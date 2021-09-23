---
title: IDBRequest.source
slug: Web/API/IDBRequest/source
tags:
  - API
  - Database
  - IDBRequest
  - IndexedDB
  - Property
  - Reference
  - Storage
  - source
browser-compat: api.IDBRequest.source
---
{{ APIRef("IndexedDB") }}

The **`source`** read-only property of the
{{domxref("IDBRequest")}} interface returns the source of the request, such as an
Index or an object store. If no source exists (such as when calling
{{domxref("indexedDB.open")}}), it returns null.

{{AvailableInWorkers}}

## Syntax

```js
var IDBIndex = request.source;
var IDBCursor = request.source;
var IDBObjectStore = request.source;
```

## Value

An object representing the source of the request, such as an {{domxref("IDBIndex")}},
{{domxref("IDBObjectStore")}} or {{domxref("IDBCursor")}}.

## Example

The following example requests a given record title, `onsuccess` gets the
associated record from the {{domxref("IDBObjectStore")}} (made available
as `objectStoreTitleRequest.result`), updates
one property of the record, and then puts the updated record back into the object
store in another request. The source of the 2nd request is logged to the developer
console. For a full working example, see our [To-do
Notifications](https://github.com/mdn/to-do-notifications/) app ([view
example live](https://mdn.github.io/to-do-notifications/).)

```js
var title = "Walk dog";

// Open up a transaction as usual
var objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

// Get the to-do list object that has this title as its title
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
  console.log("The source of this request is " + updateTitleRequest.source);
  // When this new request succeeds, run the displayData()
  // function again to update the display
  updateTitleRequest.onsuccess = function() { displayData(); };
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
