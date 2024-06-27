---
title: "IDBRequest: error property"
short-title: error
slug: Web/API/IDBRequest/error
page-type: web-api-instance-property
browser-compat: api.IDBRequest.error
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

The **`error`** read-only property of the
{{domxref("IDBRequest")}} interface returns the error in the event of an unsuccessful
request.

## Value

A {{domxref("DOMException")}} or `null` if there is no error. The following error names are returned
in the exception object:

- `AbortError`
  - : If you abort the transaction, then all requests still in progress receive this error.
- `ConstraintError`
  - : If you insert data that doesn't conform to a constraint.
    It's an exception type for creating stores and indexes.
    You get this error, for example, if you try to add a new key that already exists in the record.
- `QuotaExceededError`
  - : If you run out of disk quota and the user declined to grant you more space.
- `UnknownError`
  - : If the operation failed for reasons unrelated to the database itself.
    A failure due to disk IO errors is such an example.
- `VersionError`
  - : If you try to open a database with a version lower than the one it already has.

In addition to the error codes sent to the {{ domxref("IDBRequest") }} object,
asynchronous operations can also raise exceptions. The list describes problems that
could occur when the request is being executed, but you might also encounter other
problems when the request is being made. For example, if the result is accessed
while the request is not completed, the `InvalidStateError` exception is thrown.

## Examples

The following example requests a given record title, `onsuccess` gets the
associated record from the {{domxref("IDBObjectStore")}} (made available as
`objectStoreTitleRequest.result`), updates one property of the record, and then puts the
updated record back into the object store. Also included at the bottom is an
`onerror` function that reports what the error was if the request fails.
For a full working example, see our [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app ([View the example live](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const title = "Walk dog";

// Open up a transaction as usual
const objectStore = db
  .transaction(["toDoList"], "readwrite")
  .objectStore("toDoList");

// Get the to-do list with the specified title
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

objectStoreTitleRequest.onerror = () => {
  // If an error occurs with the request, log what it is
  console.log(
    `There has been an error with retrieving your data: ${objectStoreTitleRequest.error}`,
  );
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
