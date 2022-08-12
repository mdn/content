---
title: IDBDatabase.transaction()
slug: Web/API/IDBDatabase/transaction
page-type: web-api-instance-method
tags:
  - API
  - Database
  - IDBDatabase
  - IndexedDB
  - Method
  - Reference
  - Storage
browser-compat: api.IDBDatabase.transaction
---
{{ APIRef("IndexedDB") }}

The **`transaction`** method of the {{domxref("IDBDatabase")}} interface immediately
returns a transaction object ({{domxref("IDBTransaction")}}) containing the
{{domxref("IDBTransaction.objectStore")}} method, which you can use to access your
object store.

{{AvailableInWorkers}}

## Syntax

```js
transaction(storeNames)
transaction(storeNames, mode)
transaction(storeNames, mode, options)
```

### Parameters

- `storeNames`

  - : The names of object stores that are in the scope of the new transaction, declared as
    an array of strings. Specify only the object stores that you need to access.
    If you need to access only one object store, you can specify its name as a string.
    Therefore the following lines are equivalent:

    ```js
    db.transaction(['my-store-name']);
    db.transaction('my-store-name');
    ```

    If you need to access all object stores in the database, you can use the property
    {{domxref("IDBDatabase.objectStoreNames")}}:

    ```js
    const transaction = db.transaction(db.objectStoreNames);
    ```

    Passing an empty array will throw an exception.

- `mode` {{optional_inline}}

  - : The types of access that can be performed in the transaction. Transactions are
    opened in one of three modes: `readonly`, `readwrite` and
    `readwriteflush` (non-standard, Firefox-only.) `versionchange`
    mode can't be specified here. If you don't provide the parameter, the default access
    mode is `readonly`. To avoid slowing things down, don't open a
    `readwrite` transaction unless you actually need to write into the
    database.

    If you need to open the object store in `readwrite` mode to change data,
    you would use the following:

    ```js
    const transaction = db.transaction('my-store-name', "readwrite");
    ```

    As of Firefox 40, IndexedDB transactions have relaxed durability guarantees to
    increase performance (see {{Bug("1112702")}}), which is the same behavior as other
    IndexedDB-supporting browsers. Previously in a `readwrite` transaction, a
    {{domxref("IDBTransaction.complete_event", "complete")}} event was fired only when all data was guaranteed
    to have been flushed to disk. In Firefox 40+ the `complete` event is
    fired after the OS has been told to write the data but potentially before that data
    has actually been flushed to disk. The `complete` event may thus be
    delivered quicker than before, however, there exists a small chance that the entire
    transaction will be lost if the OS crashes or there is a loss of system power before
    the data is flushed to disk. Since such catastrophic events are rare most consumers
    should not need to concern themselves further.

    > **Note:** In Firefox, if you wish to ensure durability for some
    > reason (e.g. you're storing critical data that cannot be recomputed later) you can
    > force a transaction to flush to disk before delivering the `complete`
    > event by creating a transaction using the experimental (non-standard)
    > `readwriteflush` mode (see {{domxref("IDBDatabase.transaction")}}.)
    > This is currently experimental, and can only be used if the
    > `dom.indexedDB.experimental` pref is set to `true` in
    > `about:config`.

- `options` {{optional_inline}}

  - : Dictionary of other options. Available options are:

    - `durability`
      - : `"default"`, `"strict"`, or
        `"relaxed"`. The default is `"default"`. Using
        `"relaxed"` provides better performance, but with fewer guarantees. Web
        applications are encouraged to use `"relaxed"` for ephemeral data such
        as caches or quickly changing records, and `"strict"` in cases where
        reducing the risk of data loss outweighs the impact to performance and power.

### Return value

An {{domxref("IDBTransaction")}} object.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("IDBDatabase.close", "close()")}} method has previously been called on this {{domxref("IDBDatabase")}} instance.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if an object store specified in the 'storeNames' parameter has been deleted or removed.
- {{jsxref("TypeError")}}
  - : Thrown if the value for the `mode` parameter is invalid.
- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if the function was called with an empty list of store names.

## Examples

In this example we open a database connection, then use transaction() to open a
transaction on the database. For a complete example, see our
[To-do Notifications](https://github.com/mdn/to-do-notifications/) app ([view example live](https://mdn.github.io/to-do-notifications/).)

```js
let db;

// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.innerHTML += '<li>Database initialized.</li>';

  // store the result of opening the database in the db variable.
  // This is used a lot below
  db = DBOpenRequest.result;

  // Run the displayData() function to populate the task list with
  // all the to-do list data already in the IDB
  displayData();

};

// open a read/write db transaction, ready for adding the data
const transaction = db.transaction(["toDoList"], "readwrite");

// report on the success of opening the transaction
transaction.oncomplete = (event) => {
  note.innerHTML += '<li>Transaction completed: database modification finished.</li>';
};

transaction.onerror = (event) => {
  note.innerHTML += '<li>Transaction not opened due to error. Duplicate items not allowed.</li>';
};

// you would then go on to do something to this database
// via an object store
const objectStore = transaction.objectStore("toDoList");
// etc.
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
