---
title: IDBRequest.error
slug: Web/API/IDBRequest/error
tags:
  - API
  - Database
  - Error
  - IDBRequest
  - IndexedDB
  - Property
  - Reference
  - Storage
browser-compat: api.IDBRequest.error
---
{{ APIRef("IndexedDB") }}

The **`error`** read-only property of the
{{domxref("IDBRequest")}} interface returns the error in the event of an unsuccessful
request.

{{AvailableInWorkers}}

## Syntax

```js
var myError = request.error;
```

### Value

A {{domxref("DOMError")}} containing the relevant error. In Chrome 48+/Firefox 58+ this
property returns a {{domxref("DOMException")}} because `DOMError` has been
removed from the DOM standard. The following error codes are returned under certain
conditions:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Error</th>
      <th scope="col">Explanation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>AbortError</code></td>
      <td>
        If you abort the transaction, then all requests still in progress
        receive this error.
      </td>
    </tr>
    <tr>
      <td><code>ConstraintError</code></td>
      <td>
        If you insert data that doesn't conform to a constraint. It's
        an exception type for creating stores and indexes. You get this error,
        for example, if you try to add a new key that already exists in the
        record.
      </td>
    </tr>
    <tr>
      <td><code>QuotaExceededError</code></td>
      <td>
        If you run out of disk quota and the user declined to grant you more
        space.
      </td>
    </tr>
    <tr>
      <td><code>UnknownError</code></td>
      <td>
        If the operation failed for reasons unrelated to the database itself. A
        failure due to disk IO errors is such an example.
      </td>
    </tr>
    <tr>
      <td><code>NoError</code></td>
      <td>If the request succeeds.</td>
    </tr>
    <tr>
      <td><code>VersionError</code></td>
      <td>
        If you try to open a database with a version lower than the one it
        already has.
      </td>
    </tr>
  </tbody>
</table>

In addition to the error codes sent to the {{ domxref("IDBRequest") }} object,
asynchronous operations can also raise exceptions. The list describes problems that
could occur when the request is being executed, but you might also encounter other
problems when the request is being made. For example, if the request failed and the
result is not available, the `InvalidStateError` exception
is thrown.

## Example

The following example requests a given record title, `onsuccess` gets the
associated record from the {{domxref("IDBObjectStore")}} (made available as
`objectStoreTitleRequest.result`, updates one property of the record, and then puts the
updated record back into the object store. Also included at the bottom is an
`onerror` function that reports what the error was if the request fails.
For a full working example, see our [To-do
Notifications](https://github.com/mdn/to-do-notifications/) app ([view example live](https://mdn.github.io/to-do-notifications/).)

```js
var title = "Walk dog";

// Open up a transaction as usual
var objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

// Get the do-do list with the specified title
var objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = function() {
  // Grab the data object returned as the result
  var data = objectStoreTitleRequest.result;

  // Update the notified value in the object to "yes"
  data.notified = "yes";

  // Create another request that inserts the item
  // back into the database
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
