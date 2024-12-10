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
request. If the request is not completed, the error is not available and an `InvalidStateError` exception is
thrown.

## Value

A {{domxref("DOMException")}} or `null` if there is no error. The exception object will have one of the following names, depending on what caused the error.

These errors are asynchronous, meaning that they can't be handled via [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch). However, if an `IDBRequest` has an {{domxref("IDBRequest.error", "error")}} event handler assigned, you can still inspect such errors by querying the request's `error` property via the event object, for example [`event.target.error.name`](/en-US/docs/Web/API/DOMException/name) or [`event.target.error.message`](/en-US/docs/Web/API/DOMException/message).

- `AbortError`
  - : If you abort the transaction, then all requests still in progress receive this error.
- `ConstraintError`
  - : Received if you insert data that doesn't conform to a constraint when creating stores and indexes.
    For example, you will get this error if you try to add a new key that already exists in the record.
- `DataError` or `UnknownError`
  - : Received for transient read failure errors, including general disk IO errors. See "Large value read failure errors" below for more details.
- `NotFoundError` or `NotReadableError`
  - : Received for unrecoverable read failure errors. See "Large value read failure errors" below for more details.
- `QuotaExceededError`
  - : Received if the application runs out of disk quota. In some cases, browsers prompt the user for more space, and the error is received if they decline the request. In other cases, the browser uses heuristics to determine whether more space can be assigned.
- `VersionError`
  - : If you try to open a database with a version lower than the one it already has, this error is received.

### Large value read failure errors

Large value read failure errors occur when an IndexedDB stores large blob values (for example, audio files for an offline podcast app), and then subsequently fails to read those values. This category of errors can occur due to transient causes such as low memory and unrecoverable causes such as source blob files being deleted.

Different IndexedDB implementations store large values in different ways. For example, in Chrome, large IndexedDB values are not stored directly in the underlying database; instead, they are stored as separate files that are accessed via a reference stored in the database. It has been observed that these separate files can end up being deleted because they show up as opaque files to users when they are using disk space recovery programs.

Possible corrective actions for such cases might include notifying the user, deleting the entry from the database, then attempting to re-fetch the data from the server.

More recent browser versions have changed the error types and improved the error messages to help developers distinguish between transient and unrecoverable cases.

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
    `There has been an error with retrieving your data:
    ${objectStoreTitleRequest.error.name}: ${objectStoreTitleRequest.error.message}`,
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
