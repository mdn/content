---
title: "IDBRequest: transaction property"
short-title: transaction
slug: Web/API/IDBRequest/transaction
page-type: web-api-instance-property
browser-compat: api.IDBRequest.transaction
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

The **`transaction`** read-only property of the IDBRequest
interface returns the transaction for the request, that is, the transaction the
request is being made inside.

This property can be `null` for requests not made within transactions,
such as for requests returned from {{domxref("IDBFactory.open")}} — in this case
you're just connecting to a database, so there is no transaction to return. If a
version upgrade is needed when opening a database then during the
{{domxref("IDBOpenDBRequest.upgradeneeded_event", "upgradeneeded")}} event handler the
**`transaction`** property will be an
{{domxref("IDBTransaction")}} with {{domxref("IDBTransaction.mode", "mode")}} equal
to `"versionchange"`, and can be used to access existing object stores and
indexes, or abort the upgrade. Following the upgrade, the
**`transaction`** property will again be `null`.

## Value

An {{domxref("IDBTransaction")}}.

## Examples

The following example requests a given record title, `onsuccess` gets the
associated record from the {{domxref("IDBObjectStore")}} (made available
as `objectStoreTitleRequest.result`), updates
one property of the record, and then puts the updated record back into the object
store in another request. The source of the requests is logged to the developer
console — both originate from the same transaction. For a full working example, see
our [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app
([View the example live](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const title = "Walk dog";

// Open up a transaction as usual
const objectStore = db
  .transaction(["toDoList"], "readwrite")
  .objectStore("toDoList");

// Get the to-do list object that has this title as it's title
const objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = () => {
  // Grab the data object returned as the result
  const data = objectStoreTitleRequest.result;

  // Update the notified value in the object to "yes"
  data.notified = "yes";

  // Create another request that inserts the item back
  // into the database
  const updateTitleRequest = objectStore.put(data);

  // Log the transaction that originated this request
  console.log(
    `The transaction that originated this request is ${updateTitleRequest.transaction}`,
  );

  // When this new request succeeds, run the displayData()
  // function again to update the display
  updateTitleRequest.onsuccess = () => {
    displayData();
  };
};
```

This example shows how a the **`transaction`** property can be
used during a version upgrade to access existing object stores:

```js
const openRequest = indexedDB.open("db", 2);
console.log(openRequest.transaction); // Will log "null".

openRequest.onupgradeneeded = (event) => {
  console.log(openRequest.transaction.mode); // Will log "versionchange".
  const db = openRequest.result;
  if (event.oldVersion < 1) {
    // New database, create "books" object store.
    db.createObjectStore("books");
  }
  if (event.oldVersion < 2) {
    // Upgrading from v1 database: add index on "title" to "books" store.
    const bookStore = openRequest.transaction.objectStore("books");
    bookStore.createIndex("by_title", "title");
  }
};

openRequest.onsuccess = () => {
  console.log(openRequest.transaction); // Will log "null".
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
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([View the example live](https://mdn.github.io/dom-examples/to-do-notifications/)).
