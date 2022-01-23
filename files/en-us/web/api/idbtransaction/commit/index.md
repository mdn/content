---
title: IDBTransaction.commit()
slug: Web/API/IDBTransaction/commit
tags:
  - API
  - IDBTransaction
  - Method
  - Reference
  - Web
  - commit
browser-compat: api.IDBTransaction.commit
---
{{ APIRef("IndexedDB") }}

The **`commit()`** method of the {{domxref("IDBTransaction")}} interface commits the transaction if it is called on an active transaction.

Note that `commit()` doesn't normally _have_ to be called — a transaction will automatically commit when all outstanding requests have been satisfied and no new requests have been made. `commit()` can be used to start the commit process without waiting for events from outstanding requests to be dispatched.

If it is called on a transaction that is not active, it throws an {{exception("InvalidStateError")}} `DOMException`.

{{AvailableInWorkers}}

## Syntax

```js
transaction.commit();
```

### Parameters

None.

### Return value

Void.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the transaction state is not active.

## Examples

    // open a read/write db transaction, ready for adding the data
    var transaction = db.transaction(["myDB"], "readwrite");

    // report on the success of opening the transaction
    transaction.oncomplete = function(event) {
      note.innerHTML += '<li>Transaction completed: database modification finished.</li>';
    };

    transaction.onerror = function(event) {
      note.innerHTML += '<li>Transaction not opened due to error. Duplicate items not allowed.</li>';
    };

    // create an object store on the transaction
    var objectStore = transaction.objectStore("myObjStore");

    // add our newItem object to the object store
    var objectStoreRequest = objectStore.add(newItem[0]);

    objectStoreRequest.onsuccess = function(event) {
      // report the success of the request (this does not mean the item
      // has been stored successfully in the DB - for that you need transaction.onsuccess)
      note.innerHTML += '<li>Request successful.</li>';
    };

    // Force the changes to be committed to the database asap
    transaction.commit();

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
