---
title: IDBRequest.onerror
slug: Web/API/IDBRequest/onerror
tags:
  - API
  - Database
  - IDBRequest
  - IndexedDB
  - Property
  - Reference
  - Storage
  - onerror
browser-compat: api.IDBRequest.onerror
---
{{ APIRef("IndexedDB") }}

The **`onerror`** event handler of the
{{domxref("IDBRequest")}} interface handles the `error` event, fired when a
request returns an error.

The event handler takes one parameter, an error [Event](/en-US/docs/Web/API/Element/error_event) with type="error".

{{AvailableInWorkers}}

## Syntax

```js
request.onerror = function(event) { /* ... */ };
```

## Example

The following example requests a given record title, `onsuccess` gets the
associated record from the {{domxref("IDBObjectStore")}} (made available as
`objectStoreTitleRequest.result`), updates one property of the record, and then puts the
updated record back into the object store. Also included at the bottom is
an `onerror` function that reports what the error was if the request fails.
For a full working example, see our [To-do
Notifications](https://github.com/mdn/to-do-notifications/) app ([view
example live](https://mdn.github.io/to-do-notifications/).)

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

  // Create another request that inserts the item back
  // into the database
  var updateTitleRequest = objectStore.put(data);

  // When this new request succeeds, run the displayData()
  // function again to update the display
  updateTitleRequest.onsuccess = function() {
    displayData();
  };
};

objectStoreTitleRequest.onerror = function() {
  // If an error occurs with the request, log what it is
  console.log("There has been an error with retrieving your data: " + objectStoreTitleRequest.error);
  // TODO what about event parameter into onerror()? What will be inside of this event?
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [Error Event](/en-US/docs/Web/API/Element/error_event)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do
  Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/).)
