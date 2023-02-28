---
title: IDBTransaction
slug: Web/API/IDBTransaction
page-type: web-api-interface
browser-compat: api.IDBTransaction
---

{{APIRef("IndexedDB")}}

The **`IDBTransaction`** interface of the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) provides a static, asynchronous transaction on a database using event handler attributes. All reading and writing of data is done within transactions. You use {{domxref("IDBDatabase")}} to start transactions, {{domxref("IDBTransaction")}} to set the mode of the transaction (e.g. is it `readonly` or `readwrite`), and you access an {{domxref("IDBObjectStore")}} to make a request. You can also use an `IDBTransaction` object to abort transactions.

{{AvailableInWorkers}}

{{InheritanceDiagram}}

Transactions are started when the transaction is created, not when the first request is placed; for example consider this:

```js
const trans1 = db.transaction("foo", "readwrite");
const trans2 = db.transaction("foo", "readwrite");
const objectStore2 = trans2.objectStore("foo");
const objectStore1 = trans1.objectStore("foo");
objectStore2.put("2", "key");
objectStore1.put("1", "key");
```

After the code is executed the object store should contain the value "2", since `trans2` should run after `trans1`.

## Transaction failures

Transactions can fail for a fixed number of reasons, all of which (except the user agent crash) will trigger an abort callback:

- Abort due to bad requests, e.g. trying to `add()` the same key twice, or `put()` with the same index key with a uniqueness constraint. This causes an error on the request, which can bubble up to an error on the transaction, which aborts the transaction. This can be prevented by using `preventDefault()` on the error event on the request.
- An explicit `abort()` call from script.
- An uncaught exception in the request's `success`/`error` handler.
- An I/O error (e.g. an actual failure to write to disk, or other OS/hardware failure).
- Quota exceeded.
- A user agent crash.

## Firefox durability guarantees

Note that as of Firefox 40, IndexedDB transactions have relaxed durability guarantees to increase performance (see [Webkit bug 1112702](https://bugzil.la/1112702).) Previously in a `readwrite` transaction, a {{domxref("IDBTransaction.complete_event","complete")}} event was fired only when all data was guaranteed to have been flushed to disk. In Firefox 40+ the `complete` event is fired after the OS has been told to write the data but potentially before that data has actually been flushed to disk. The `complete` event may thus be delivered quicker than before, however, there exists a small chance that the entire transaction will be lost if the OS crashes or there is a loss of system power before the data is flushed to disk. Since such catastrophic events are rare, most consumers should not need to concern themselves further.

If you must ensure durability for some reason (e.g. you're storing critical data that cannot be recomputed later) you can force a transaction to flush to disk before delivering the `complete` event by creating a transaction using the experimental (non-standard) `readwriteflush` mode (see {{domxref("IDBDatabase.transaction")}}.

## Instance properties

- {{domxref("IDBTransaction.db")}} {{ReadOnlyInline}}
  - : The database connection with which this transaction is associated.
- {{domxref("IDBTransaction.durability")}} {{ReadOnlyInline}}
  - : Returns the durability hint the transaction was created with.
- {{domxref("IDBTransaction.error")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("DOMException")}} indicating the type of error that occurred when there is an unsuccessful transaction. This property is `null` if the transaction is not finished, is finished and successfully committed, or was aborted with the {{domxref("IDBTransaction.abort()")}} function.
- {{domxref("IDBTransaction.mode")}} {{ReadOnlyInline}}
  - : The mode for isolating access to data in the object stores that are in the scope of the transaction. The default value is [`readonly`](#const_read_only).
- {{domxref("IDBTransaction.objectStoreNames")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("DOMStringList")}} of the names of {{domxref("IDBObjectStore")}} objects associated with the transaction.

## Instance methods

Inherits from: {{domxref("EventTarget")}}

- {{domxref("IDBTransaction.abort()")}}
  - : Rolls back all the changes to objects in the database associated with this transaction. If this transaction has been aborted or completed, this method fires an error event.
- {{domxref("IDBTransaction.objectStore()")}}
  - : Returns an {{domxref("IDBObjectStore")}} object representing an object store that is part of the scope of this transaction.
- {{domxref("IDBTransaction.commit()")}}
  - : For an active transaction, commits the transaction. Note that this doesn't normally _have_ to be called — a transaction will automatically commit when all outstanding requests have been satisfied and no new requests have been made. `commit()` can be used to start the commit process without waiting for events from outstanding requests to be dispatched.

## Events

Listen to these events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this interface.

- [`abort`](/en-US/docs/Web/API/IDBTransaction/abort_event)
  - : An event fired when the `IndexedDB` transaction is aborted.
    Also available via the `onabort` property; this event bubbles to {{domxref("IDBDatabase")}}.
- [`complete`](/en-US/docs/Web/API/IDBTransaction/complete_event)
  - : An event fired when the transaction successfully completes.
    Also available via the `oncomplete` property.
- [`error`](/en-US/docs/Web/API/IDBTransaction/error_event)
  - : An event fired when a request returns an error and the event bubbles up to the connection object ({{domxref("IDBDatabase")}}).
    Also available via the `onerror` property.

## Mode constants

{{Deprecated_Header}}

> **Warning:** These constants are no longer available — they were removed in Gecko 25. You should use the string constants directly instead. ([Firefox bug 888598](https://bugzil.la/888598))

Transactions can have one of three modes:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Constant</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><a>READ_ONLY</a></code>
      </td>
      <td>"readonly" (0 in Chrome)</td>
      <td><p>Allows data to be read but not changed.</p></td>
    </tr>
    <tr>
      <td>
        <code><a>READ_WRITE</a></code>
      </td>
      <td>"readwrite" (1 in Chrome)</td>
      <td>
        Allows reading and writing of data in existing data stores to be
        changed.
      </td>
    </tr>
    <tr>
      <td>
        <code><a>VERSION_CHANGE</a></code>
      </td>
      <td>"versionchange" (2 in Chrome)</td>
      <td>
        Allows any operation to be performed, including ones that delete and
        create object stores and indexes. Transactions of this mode cannot run
        concurrently with other transactions. Transactions in this mode are
        known as "upgrade transactions."
      </td>
    </tr>
  </tbody>
</table>

Even if these constants are now deprecated, you can still use them to provide backward compatibility if required (in Chrome [the change was made in version 21](https://peter.sh/2012/05/tab-sizing-string-values-for-indexeddb-and-chrome-21/)). You should code defensively in case the object is not available anymore:

```js
const myIDBTransaction = window.IDBTransaction ||
  window.webkitIDBTransaction || { READ_WRITE: "readwrite" };
```

## Examples

In the following code snippet, we open a read/write transaction on our database and add some data to an object store. Note also the functions attached to transaction event handlers to report on the outcome of the transaction opening in the event of success or failure. For a full working example, see our [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const note = document.getElementById("notifications");

// an instance of a db object for us to store the IDB data in
let db;

// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += "<li>Database initialized.</li>";

  // store the result of opening the database in the db
  // variable. This is used a lot below
  db = DBOpenRequest.result;

  // Add the data to the database
  addData();
};

function addData() {
  // Create a new object to insert into the IDB
  const newItem = [
    {
      taskTitle: "Walk dog",
      hours: 19,
      minutes: 30,
      day: 24,
      month: "December",
      year: 2013,
      notified: "no",
    },
  ];

  // open a read/write db transaction, ready to add data
  const transaction = db.transaction(["toDoList"], "readwrite");

  // report on the success of opening the transaction
  transaction.oncomplete = (event) => {
    note.innerHTML +=
      "<li>Transaction completed: database modification finished.</li>";
  };

  transaction.onerror = (event) => {
    note.innerHTML +=
      "<li>Transaction not opened due to error. Duplicate items not allowed.</li>";
  };

  // create an object store on the transaction
  const objectStore = transaction.objectStore("toDoList");

  // add our newItem object to the object store
  const objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = (event) => {
    // report the success of the request (this does not mean the item
    // has been stored successfully in the DB - for that you need transaction.oncomplete)
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
