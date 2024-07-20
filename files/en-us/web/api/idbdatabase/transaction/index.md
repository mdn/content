---
title: "IDBDatabase: transaction() method"
short-title: transaction()
slug: Web/API/IDBDatabase/transaction
page-type: web-api-instance-method
browser-compat: api.IDBDatabase.transaction
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

The **`transaction`** method of the {{domxref("IDBDatabase")}} interface immediately returns a transaction object ({{domxref("IDBTransaction")}}) containing the {{domxref("IDBTransaction.objectStore")}} method, which you can use to access your object store.

## Syntax

```js-nolint
transaction(storeNames)
transaction(storeNames, mode)
transaction(storeNames, mode, options)
```

### Parameters

- `storeNames`

  - : The names of object stores that are in the scope of the new transaction, declared as an array of strings. Specify only the object stores that you need to access.
    If you need to access only one object store, you can specify its name as a string.
    Therefore the following lines are equivalent:

    ```js
    db.transaction(["my-store-name"]);
    db.transaction("my-store-name");
    ```

    If you need to access all object stores in the database, you can use the property {{domxref("IDBDatabase.objectStoreNames")}}:

    ```js
    const transaction = db.transaction(db.objectStoreNames);
    ```

    Passing an empty array will throw an exception.

- `mode` {{optional_inline}}

  - : The types of access that can be performed in the transaction.
    Transactions are opened in one of three modes:

    - `readonly`
      - : Open a transaction for reading from an object store. This is the default mode.
    - `readwrite`
      - : Open a transaction for both reading and writing from an object store.
        This should only be used if need to write into the database.
    - `readwriteflush` {{non-standard_inline}} {{experimental_inline}}
      - : Force a transaction to flush to disk before delivering the `complete` event.
        This might be used for storing critical data that cannot be recomputed later.

- `options` {{optional_inline}}

  - : Object defining additional options, including:

    - `durability`

      - : One of the three string-literal values below:

        - `"strict"`
          - : The user agent may consider that the transaction has successfully committed only after verifying that all outstanding changes have been successfully written to a persistent storage medium.
            This is recommended where the risk of data loss outweighs the impact of its use on performance and power (compared to `relaxed`).
        - `"relaxed"`
          - : The user agent may consider that the transaction has successfully committed as soon as all outstanding changes have been written to the operating system, without subsequent verification.
            This offers better performance than `strict`, and is recommended for ephemeral data such as caches or quickly changing records.
        - `"default"`
          - : The user agent should use its default durability behavior for the storage bucket.
            This is the default for transactions if not otherwise specified.

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

In this example we open a database connection, then use transaction() to open a transaction on the database.
For a complete example, see our [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
let db;

// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Database initialized.";

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
  note.appendChild(document.createElement("li")).textContent =
    "Transaction completed: database modification finished.";
};

transaction.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Transaction not opened due to error. Duplicate items not allowed.";
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
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([View the example live](https://mdn.github.io/dom-examples/to-do-notifications/)).
