---
title: IDBObjectStore.add()
slug: Web/API/IDBObjectStore/add
page-type: web-api-instance-method
tags:
  - API
  - Database
  - IDBObjectStore
  - IndexedDB
  - Method
  - Reference
  - Storage
browser-compat: api.IDBObjectStore.add
---
{{ APIRef("IndexedDB") }}

The **`add()`** method of the {{domxref("IDBObjectStore")}} interface returns an {{domxref("IDBRequest")}} object, and, in a separate thread, creates a [structured clone](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone) of the value, and stores the cloned value in the object store. This is for adding new records to an object store.

To determine if the add operation has completed successfully, listen for the
transaction's `complete` event in addition to the
`IDBObjectStore.add` request's `success` event, because the
transaction may still fail after the success event fires. In other words, the success
event is only triggered when the transaction has been successfully queued.

The add method is an _insert only_ method. If a
record already exists in the object store with the `key` parameter as its
key, then an error `ConstrainError` event is fired on the returned request
object. For updating existing records, you should use the
{{domxref("IDBObjectStore.put")}} method instead.

{{AvailableInWorkers}}

## Syntax

```js
add(value)
add(value, key)
```

### Parameters

- `value`
  - : The value to be stored.
- `key` {{optional_inline}}
  - : The key to use to identify the record. If unspecified, it results to null.

### Return value

An {{domxref("IDBRequest")}} object on which
subsequent events related to this operation are fired.

### Exceptions

This method may raise a {{domxref("DOMException")}} of
one of the following types:

- `ReadOnlyError` {{domxref("DOMException")}}
  - : Thrown if the transaction associated with this operation is in read-only <a href="/en-US/docs/Web/API/IDBTransaction#mode_constants">mode</a>.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if this {{domxref("IDBObjectStore")}}'s transaction is inactive.
- `DataError` {{domxref("DOMException")}}
  - : Thrown if any of the following conditions apply:
    - The object store uses in-line keys or has a key generator, and a key parameter was provided.
    - The object store uses out-of-line keys and has no key generator, and no key parameter was provided.
    - The object store uses in-line keys but no key generator, and the object store's key path does not yield a valid key.
    - The key parameter was provided but does not contain a valid key.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("IDBObjectStore")}} has been deleted or removed.
- `DataCloneError` {{domxref("DOMException")}}
  - : Thrown if the data being stored could not be cloned by the internal structured cloning algorithm.
- `ConstraintError` {{domxref("DOMException")}}
  - : Thrown if an insert operation failed because the primary key constraint was
        violated (due to an already existing record with the same primary key
        value).

## Examples

In the following code snippet, we open a read/write transaction on our database and add
some data to an object store using `add()`. Note also the functions attached
to transaction event handlers to report on the outcome of the transaction opening in the
event of success or failure. For a full working example, see our [To-do Notifications](https://github.com/mdn/to-do-notifications/) app ([view example live](https://mdn.github.io/to-do-notifications/).)

```js
// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += '<li>Database initialized.</li>';

  // store the result of opening the database in the db variable.
  // This is used a lot below
  db = DBOpenRequest.result;

  // Run the addData() function to add the data to the database
  addData();
};

function addData() {
  // Create a new object ready to insert into the IDB
  const newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(["toDoList"], "readwrite");

  // report on the success of the transaction completing, when everything is done
  transaction.oncomplete = (event) => {
    note.innerHTML += '<li>Transaction completed.</li>';
  };

  transaction.onerror = (event) => {
  note.innerHTML += '<li>Transaction not opened due to error. Duplicate items not allowed.</li>';
  };

  // create an object store on the transaction
  const objectStore = transaction.objectStore("toDoList");

  // Make a request to add our newItem object to the object store
  const objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = (event) => {
    // report the success of our request
    note.innerHTML += '<li>Request successful.</li>';
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
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/).)
