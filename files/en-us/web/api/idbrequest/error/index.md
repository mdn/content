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

A {{domxref("DOMException")}} or `null` if there is no error. The following error names can be returned
in the exception object, depending on what caused the error.

### Transaction errors

- `AbortError`
  - : Thrown if you abort the transaction, then all requests still in progress receive this error.
- `ReadOnlyError`
  - : Thrown if the mutating operation was attempted in a read-only transaction.
- `SyntaxError`
  - : Thrown in the `keyPath` argument contains an invalid key path.
- `TransactionInactiveError`
  - : Thrown if a request was placed against a transaction which is currently not active, or which is finished.

### Data integrity errors

- `ConstraintError`
  - : Thrown if you insert data that doesn't conform to a constraint when creating stores and indexes.
    For example, you will get this error if you try to add a new key that already exists in the record.
- `DataError`
  - : Thrown if data provided to an operation does not meet requirements.
- `DataCloneError`
  - : Thrown if the data being stored could not be cloned by the internal structured cloning algorithm.
- `InvalidAccessError`
  - : Thrown if an invalid operation was performed on an object.
- `InvalidStateError`
  - : Thrown if an operation was called on an object on which it is not allowed or at a time when it is not allowed, or if a request is made on a source object that has been deleted or removed. For example, if a result is accessed before the corresponding request is completed.
- `QuotaExceededError`
  - : Thrown if you run out of disk quota and the user declined to grant the application more space.
- `VersionError`
  - : Thrown if you try to open a database with a version lower than the one it already has.

### Large value read failure errors

Large IndexedDB values are not stored directly in the underlying database; instead, they are stored as separate files that are accessed via a reference stored in the database. This category of errors can occur due to transient causes such as low memory and unrecoverable causes such as source blob files being deleted. Separate blob files containing IndexedDB data can end up being deleted because they show up as opaque files to users when they are using disk space recovery programs.

Possible corrective actions for such unrecoverable cases might include notifying the user, deleting the entry from the DB, then attempting to re-fetch the data from the server.

Errors in this caregory are as follows. More recent browser versions have changed the error types thrown and improved the error messages to help developers distinguish between transient and unrecoverable cases.

- `NotFoundError` or `NotReadableError`
  - : Thrown for unrecoverable errors.
- `DataError` or `UnknownError`
  - : Thrown for transient errors, including general disk IO errors.

### Related errors

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
