---
title: IDBObjectStore.clear()
slug: Web/API/IDBObjectStore/clear
tags:
  - API
  - Database
  - IDBObjectStore
  - IndexedDB
  - Method
  - Reference
  - Storage
  - clear
browser-compat: api.IDBObjectStore.clear
---
{{ APIRef("IndexedDB") }}

The **`clear()`** method of the {{domxref("IDBObjectStore")}}
interface creates and immediately returns an {{domxref("IDBRequest")}} object, and
clears this object store in a separate thread. This is for deleting all the current
data out of an object store.

Clearing an object store consists of removing all records from the object store and
removing all records in indexes that reference the object store. To remove only some of
the records in a store, use {{domxref("IDBObjectStore.delete")}} passing a key
or {{domxref("IDBKeyRange")}}.

{{AvailableInWorkers}}

## Syntax

```js
var request = objectStore.clear();
```

### Returns

An {{domxref("IDBRequest")}} object on which subsequent events related to this
operation are fired.

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ReadOnlyError</code></td>
      <td>
        The transaction associated with this operation is in read-only <a
          href="/en-US/docs/Web/API/IDBTransaction#mode_constants"
          >mode</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>TransactionInactiveError</code></td>
      <td>
        This {{domxref("IDBObjectStore")}}'s transaction is
        inactive.<br />
      </td>
    </tr>
  </tbody>
</table>

## Example

In the following code snippet, we open a read/write transaction on our database and
clear all the current data out of the object store using `clear()`. For a
full working example, see our [To-do Notifications](https://github.com/mdn/to-do-notifications/) app
([view example live](https://mdn.github.io/to-do-notifications/).)

```js
// Let us open our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Database initialised.</li>';

  // store the result of opening the database in the db variable.
  // This is used a lot below
  db = DBOpenRequest.result;

  // Clear all the data form the object store
  clearData();
};

function clearData() {
  // open a read/write db transaction, ready for clearing the data
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

  // Make a request to clear all the data out of the object store
  var objectStoreRequest = objectStore.clear();

  objectStoreRequest.onsuccess = function(event) {
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
- Reference example: [To-do
  Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/).)
