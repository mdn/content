---
title: IDBTransaction.oncomplete
slug: Web/API/IDBTransaction/oncomplete
tags:
  - API
  - Database
  - IDBTransaction
  - IndexedDB
  - Property
  - Reference
  - Storage
  - oncomplete
browser-compat: api.IDBTransaction.oncomplete
---
{{ APIRef("IndexedDB") }}

The **`oncomplete`** event handler of the
{{domxref("IDBTransaction")}} interface handles the complete event, fired when the
transaction successfully completes.

As of Firefox 40, IndexedDB transactions have relaxed durability guarantees to increase
performance (see {{Bug("1112702")}}), which is the same behavior as other
IndexedDB-supporting browsers. Previously in a `readwrite` transaction
{{domxref("IDBTransaction.oncomplete")}} was fired only when all data was guaranteed to
have been flushed to disk. In Firefox 40+ the `complete` event is fired after
the OS has been told to write the data but potentially before that data has actually
been flushed to disk. The `complete` event may thus be delivered quicker than
before, however, there exists a small chance that the entire transaction will be lost if
the OS crashes or there is a loss of system power before the data is flushed to disk.

{{AvailableInWorkers}}

> **Note:** In Firefox, if you wish to ensure durability for some reason
> (e.g. you're storing critical data that cannot be recomputed later) you can force a
> transaction to flush to disk before delivering the `complete` event by
> creating a transaction using the experimental (non-standard)
> `readwriteflush` mode (see {{domxref("IDBDatabase.transaction")}}.) This is
> currently experimental, and can only be used if the
> `dom.indexedDB.experimental` pref is set to `true` in
> `about:config`.

## Syntax

```js
transaction.oncomplete = function(event) { /* ... */ };
```

## Example

In the following code snippet, we open a read/write transaction on our database and add
some data to an object store. Note also the functions attached to transaction event
handlers to report on the outcome of the transaction opening in the event of success or
failure. Note the `transaction.oncomplete = function(event) { };` block,
which reports back when the transaction was successful. For a full working example, see
our [To-do Notifications](https://github.com/mdn/to-do-notifications/) app
([view example live](https://mdn.github.io/to-do-notifications/).)

```js
// Let us open our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Database initialised.</li>';

  // store the result of opening the database in the db variable.
  // This is used a lot below
  db = DBOpenRequest.result;

  // Run the addData() function to add the data to the database
  addData();
};

function addData() {
  // Create a new object ready for being inserted into the IDB
  var newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // open a read/write db transaction, ready for adding the data
  var transaction = db.transaction(["toDoList"], "readwrite");

  // report on the success of opening the transaction
  transaction.oncomplete = function(event) {
    note.innerHTML += '<li>Transaction completed: database modification finished.</li>';
  };

  transaction.onerror = function(event) {
    note.innerHTML += '<li>Transaction not opened due to error: ' + transaction.error + '</li>';
  };

  // create an object store on the transaction
  var objectStore = transaction.objectStore("toDoList");

  // add our newItem object to the object store
  var objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = function(event) {
    // report the success of the request (this does not mean the item
    // has been stored successfully in the DB - for that you need transaction.oncomplete)
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
- [`complete`](/en-US/docs/Web/API/IDBTransaction/complete_event)
  event
