---
title: IDBObjectStore.get()
slug: Web/API/IDBObjectStore/get
tags:
  - API
  - Database
  - IDBObjectStore
  - IndexedDB
  - Method
  - Reference
  - Storage
browser-compat: api.IDBObjectStore.get
---
{{ APIRef("IndexedDB") }}

The **`get()`** method of the {{domxref("IDBObjectStore")}}
interface returns an {{domxref("IDBRequest")}} object, and, in a separate thread,
returns the object store selected by the specified key. This is for retrieving
specific records from an object store.

If a value is successfully found, then a structured clone of it is created and set as
the [`result`](/en-US/docs/Web/API/IDBRequest#attr_result) of the
request object.

> **Note:** This method produces the same result for: a) a record that doesn't exist in the database and b) a record that has an undefined value.
> To tell these situations apart, call the `openCursor()` method with the same key. That method provides a cursor if the record exists, and no cursor if it does not.

{{AvailableInWorkers}}

## Syntax

```js
var request = objectStore.get(key);
```

### Parameters

- key
  - : The key or key range that identifies the record to be retrieved.

### Return value

An {{domxref("IDBRequest")}} object on which subsequent events related to this
operation are fired.

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if this {{domxref("IDBObjectStore")}}'s transaction is inactive.
- `DataError` {{domxref("DOMException")}}
  - : Thrown if key or key range provided contains an invalid key.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("IDBObjectStore")}} has been deleted or removed.

## Example

In the following code snippet, we open a read/write transaction on our database and get
one specific record from object store using `get()` — a sample record with
the key "Walk dog". Once this data object is retrieved, you could then update it using
normal JavaScript, then put it back into the database using  a
{{domxref("IDBObjectStore.put")}} operation. For a full working example, see our [To-do Notifications](https://github.com/mdn/to-do-notifications/) app
([view
example live](https://mdn.github.io/to-do-notifications/).)

```js
// Let us open our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Database initialised.</li>';

  // store the result of opening the database in the db variable.
  // This is used a lot below
  db = DBOpenRequest.result;

  // Run the getData() function to get the data from the database
  getData();
};

function getData() {
  // open a read/write db transaction, ready for retrieving the data
  var transaction = db.transaction(["toDoList"], "readwrite");

  // report on the success of the transaction completing, when everything is done
  transaction.oncomplete = function(event) {
    note.innerHTML += '<li>Transaction completed.</li>';
  };

  transaction.onerror = function(event) {
    note.innerHTML += '<li>Transaction not opened due to error: ' + transaction.error + '</li>';
  };

  // create an object store on the transaction
  var objectStore = transaction.objectStore("toDoList");

  // Make a request to get a record by key from the object store
  var objectStoreRequest = objectStore.get("Walk dog");

  objectStoreRequest.onsuccess = function(event) {
    // report the success of our request
    note.innerHTML += '<li>Request successful.</li>';

    var myRecord = objectStoreRequest.result;
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
