---
title: IDBObjectStore.put()
slug: Web/API/IDBObjectStore/put
tags:
  - API
  - Database
  - IDBObjectStore
  - IndexedDB
  - Method
  - Reference
  - Storage
  - put
browser-compat: api.IDBObjectStore.put
---
{{ APIRef("IndexedDB") }}

The **`put()`** method of the {{domxref("IDBObjectStore")}} interface updates a given record in a database, or inserts a new record if the given item does not already exist.

It returns an {{domxref("IDBRequest")}} object, and, in a separate thread, creates a [structured clone](https://www.whatwg.org/specs/web-apps/current-work/multipage/common-dom-interfaces.html#structured-clone) of the value and stores the cloned value in the object store. This is for adding new records, or updating existing records in an object store when the transaction's mode is `readwrite`. If the record is successfully stored, then a success event is fired on the returned request object with the `result` set to the key for the stored record, and the `transaction` set to the transaction in which this object store is opened.

The put method is an _update or insert_ method.
See the {{domxref("IDBObjectStore.add")}} method for an _insert only_ method.

Bear in mind that if you have a {{domxref("IDBCursor","IDBCursor")}} to the record you
want to update, updating it with {{domxref("IDBCursor.update()")}} is preferable to
using {{domxref("IDBObjectStore.put()")}}. Doing so makes it clear that an existing
record will be updated, instead of a new record being inserted.

{{AvailableInWorkers}}

## Syntax

```js
let request = objectStore.put(item);
let request = objectStore.put(item, key);
```

### Parameters

- item
  - : The item you wish to update (or insert).
- key {{optional_inline}}
  - : The primary key of the record you want to update (e.g. from
    {{domxref("IDBCursor.primaryKey")}}). This is only needed for object stores that have
    an `autoIncrement` primary key, therefore the key is not in a field on the
    record object. In such cases, calling `put(item)` will always insert a new
    record, because it doesn't know what existing record you might want to modify.

### Return value

An {{domxref("IDBRequest")}} object on which subsequent events related to this
operation are fired.

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

- `ReadOnlyError` {{domxref("DOMException")}}
  - : Thrown if the transaction associated with this operation is in read-only <a href="/en-US/docs/Web/API/IDBTransaction#mode_constants">mode</a>.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if this {{domxref("IDBObjectStore")}}'s transaction is inactive.
- `DataError` {{domxref("DOMException")}}
  - : Thrown if any of the following conditions apply:
    - The object store uses in-line keys or has a key generator, and a key parameter was provided.
    - The object store uses out-of-line keys and has no key generator, and no key parameter was provided.
    - The object store uses in-line keys but no key generator, and the object store's key path does not yield a valid key.
    - The key parameter was provided but does not contain a valid key.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("IDBObjectStore")}} has been deleted or removed.
- `DataCloneError` {{domxref("DOMException")}}
  - : Thrown if the data being stored could not be cloned by the internal structured cloning algorithm.


## Parameters

- value
  - : The value to be stored.
- key
  - : The key to use to identify the record. If unspecified, it results to null. If the
    object store has a key generator (e.g. autoincrement) the key of the object must be
    passed in to update the object.

## Example

The following example requests a given record title; when that request is successful
the `onsuccess` function gets the associated record from the
{{domxref("IDBObjectStore")}} (made available
as `objectStoreTitleRequest.result`), updates
one property of the record, and then puts the updated record back into the object
store in another request with `put()`. For a full working example, see
our [To-do Notifications](https://github.com/mdn/to-do-notifications/) app
([view example live](https://mdn.github.io/to-do-notifications/).)

```js
const title = "Walk dog";

// Open up a transaction as usual
const objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

// Get the to-do list object that has this title as it's title
const objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = () => {
  // Grab the data object returned as the result
  const data = objectStoreTitleRequest.result;

  // Update the notified value in the object to "yes"
  data.notified = "yes";

  // Create another request that inserts the item back into the database
  const updateTitleRequest = objectStore.put(data);

  // Log the transaction that originated this request
  console.log("The transaction that originated this request is " + updateTitleRequest.transaction);

  // When this new request succeeds, run the displayData() function again to update the display
  updateTitleRequest.onsuccess = () => {
    displayData();
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
