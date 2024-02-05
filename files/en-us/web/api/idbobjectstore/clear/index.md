---
title: "IDBObjectStore: clear() method"
short-title: clear()
slug: Web/API/IDBObjectStore/clear
page-type: web-api-instance-method
browser-compat: api.IDBObjectStore.clear
---

{{ APIRef("IndexedDB") }}

The **`clear()`** method of the {{domxref("IDBObjectStore")}}
interface creates and immediately returns an {{domxref("IDBRequest")}} object, and
clears this object store in a separate thread. This is for deleting all the current
data out of an object store.

Clearing an object store consists of removing all records from the object store and
removing all records in indexes that reference the object store. To remove only some of
the records in a store, use {{domxref("IDBObjectStore.delete")}} passing a key
or {{domxref("IDBKeyRange")}}.

{{AvailableInWorkers}}

## Syntax

```js-nolint
clear()
```

### Parameters

None.

### Return value

An {{domxref("IDBRequest")}} object on which subsequent events related to this operation are fired.

If the operation is successful, the value of the request's {{domxref("IDBRequest.result", "result")}} property is `undefined`.

### Exceptions

- `ReadOnlyError` {{domxref("DOMException")}}
  - : Thrown if the transaction associated with this operation is in read-only [mode](/en-US/docs/Web/API/IDBTransaction/mode).
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if this {{domxref("IDBObjectStore")}}'s transaction is inactive.

## Examples

In the following code snippet, we open a read/write transaction on our database and
clear all the current data out of the object store using `clear()`. For a
full working example, see our [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app
([view example live](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += "<li>Database initialized.</li>";

  // store the result of opening the database in the db variable.
  // This is used a lot below
  db = DBOpenRequest.result;

  // Clear all the data from the object store
  clearData();
};

function clearData() {
  // open a read/write db transaction, ready for clearing the data
  const transaction = db.transaction(["toDoList"], "readwrite");

  // report on the success of the transaction completing, when everything is done
  transaction.oncomplete = (event) => {
    note.innerHTML += "<li>Transaction completed.</li>";
  };

  transaction.onerror = (event) => {
    note.innerHTML += `<li>Transaction not opened due to error: ${transaction.error}</li>`;
  };

  // create an object store on the transaction
  const objectStore = transaction.objectStore("toDoList");

  // Make a request to clear all the data out of the object store
  const objectStoreRequest = objectStore.clear();

  objectStoreRequest.onsuccess = (event) => {
    // report the success of our request
    note.innerHTML += "<li>Request successful.</li>";
  };
}
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
