---
title: IDBObjectStore.keyPath
slug: Web/API/IDBObjectStore/keyPath
page-type: web-api-instance-property
tags:
  - API
  - Database
  - IDBObjectStore
  - IndexedDB
  - Property
  - Reference
  - Storage
  - keyPath
browser-compat: api.IDBObjectStore.keyPath
---
{{ APIRef("IndexedDB") }}

The **`keyPath`** read-only property of the
{{domxref("IDBObjectStore")}} interface returns the [key path](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) of this object store.

If this property is null, the application must provide a key for each modification
operation.

{{AvailableInWorkers}}

## Value

Any value type.

## Examples

In the following code snippet, we open a read/write transaction on our database and add
some data to an object store using `add()`. After the object store has been
created, we log `objectStore.keyPath` to
the console. For a full working example, see our [To-do Notifications](https://github.com/mdn/to-do-notifications/) app
([view example live](https://mdn.github.io/to-do-notifications/).)

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
  console.log(objectStore.keyPath);

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
