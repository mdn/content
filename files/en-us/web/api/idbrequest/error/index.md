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

A {{domxref("DOMException")}} or `null` if there is no error. The exception object will have one of the following names, depending on what caused the error.

These errors are asynchronous, meaning that they can't be handled via [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch). However, if an `IDBRequest` has an {{domxref("IDBRequest.error", "error")}} event handler assigned, you can still inspect such errors by querying the request's `error` property via the event object, for example [`event.target.error.name`](/en-US/docs/Web/API/DOMException/name) or [`event.target.error.message`](/en-US/docs/Web/API/DOMException/message).

- `AbortError`
  - : If you abort the transaction, then all requests still in progress receive this error.
- `ConstraintError`
  - : Received if you insert data that doesn't conform to a constraint when populating stores.
    For example, you will get this error if you try to add a new key that already exists in the store.
- `NotReadableError`
  - : Received for unrecoverable read failure errors. Specifically, this error signals that the record is present in the database, but the value could not be retrieved. See [Transient and unrecoverable read errors](#transient_and_unrecoverable_read_errors) below for more details.
- `QuotaExceededError`
  - : Received if the application runs out of disk quota. In some cases, browsers prompt the user for more space, and the error is received if they decline the request. In other cases, the browser uses heuristics to determine whether more space can be assigned.
- `UnknownError`
  - : Received for transient read failure errors, including general disk IO errors. See [Transient and unrecoverable read errors](#transient_and_unrecoverable_read_errors) below for more details.
- `VersionError`
  - : Received if you try to open a database with a version lower than the one it already has.

### Transient and unrecoverable read errors

Read errors occur when an IndexedDB stores values and then subsequently fails to read those values even though the associated records are still in the database.

Read errors can be one of two types — **transient** or **unrecoverable**:

Transient read errors are signalled by an `UnknownError` type, and are usually caused by low memory. This shouldn't be a problem for small databases. To avoid low memory situations in large databases, try to split up database access to only load the records you need at any one time, for example using specific [key ranges](/en-US/docs/Web/API/IDBKeyRange) relating to a user's search query or a pagination mechanism. If a low memory error is hit, the user may be asked to close other applications to free up space at the OS-level.

Unrecoverable read errors are signalled by a `NotReadableError` type, and are caused by source files being deleted.

For example, some browsers store large values (for example, audio file blobs for an offline podcast app) as separate files that are accessed via a reference stored in the database. It has been observed that these separate files can end up being deleted because they show up as opaque files to users when they are using disk space recovery programs, resulting in unrecoverable read errors when the IndexedDB is next accessed.

Possible corrective actions for unrecoverable read errors might include notifying the user, deleting the entry from the database, then attempting to re-fetch the data from the server.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown when attempting to access the property if the request
    is not completed, and therefore the error is not available.

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
