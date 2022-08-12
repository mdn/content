---
title: IDBTransaction.abort()
slug: Web/API/IDBTransaction/abort
page-type: web-api-instance-method
tags:
  - API
  - Database
  - IDBTransaction
  - IndexedDB
  - Method
  - Reference
  - Storage
  - abort
browser-compat: api.IDBTransaction.abort
---
{{ APIRef("IndexedDB") }}

The **`abort()`** method of the {{domxref("IDBTransaction")}}
interface rolls back all the changes to objects in the database associated with this
transaction.

All pending {{domxref("IDBRequest")}} objects created during this transaction have
their {{domxref("IDBRequest.error")}} attribute set to an `AbortError` {{domxref("DOMException")}}.

{{AvailableInWorkers}}

## Syntax

```js
abort()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the transaction has already been committed or aborted.

## Examples

In the following code snippet, we open a read/write transaction on our database and add
some data to an object store. Note also the functions attached to transaction event
handlers to report on the outcome of the transaction opening in the event of success or
failure. At the end, we abort any activity done under the current transaction using
`abort()`. For a full working example, see our [To-do Notifications](https://github.com/mdn/to-do-notifications/) app ([View example live](https://mdn.github.io/to-do-notifications/)).

```js
const note = document.getElementById('notifications');

// an instance of a db object for us to store the IDB data in
let db;

// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += '<li>Database initialized.</li>';

  // store the result of opening the database in the db variable. This is used a lot below
  db = DBOpenRequest.result;

  // Run the addData() function to add the data to the database
  addData();
};

function addData() {
  // Create a new object ready for being inserted into the IDB
  const newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(["toDoList"], "readwrite");

  // report on the success of opening the transaction
  transaction.oncomplete = (event) => {
    note.innerHTML += '<li>Transaction completed: database modification finished.</li>';
  };

  transaction.onerror = (event) => {
    note.innerHTML += '<li>Transaction not opened due to error. Duplicate items not allowed.</li>';
  };

  // create an object store on the transaction
  const objectStore = transaction.objectStore("toDoList");

  // add our newItem object to the object store
  const objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = (event) => {
    // report the success of the request (this does not mean the item
    // has been stored successfully in the DB - for that you need transaction.onsuccess)
    note.innerHTML += '<li>Request successful.</li>';
  };

 // Abort the transaction we just did
 transaction.abort();
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
