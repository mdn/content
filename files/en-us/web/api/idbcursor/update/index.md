---
title: "IDBCursor: update() method"
short-title: update()
slug: Web/API/IDBCursor/update
page-type: web-api-instance-method
browser-compat: api.IDBCursor.update
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

The **`update()`** method of the {{domxref("IDBCursor")}}
interface returns an {{domxref("IDBRequest")}} object, and, in a separate thread,
updates the value at the current position of the cursor in the object store. If the
cursor points to a record that has just been deleted, a new record is created.

Be aware that you can't call `update()` (or
{{domxref("IDBCursor.delete()")}}) on cursors obtained from
{{domxref("IDBIndex.openKeyCursor()")}}. For such needs, you have to use
{{domxref("IDBIndex.openCursor()")}} instead.

## Syntax

```js-nolint
update(value)
```

### Parameters

- `value`
  - : The new value to be stored at the current position.

### Return value

An {{domxref("IDBRequest")}} object on which subsequent events related to this operation are fired.

If the operation is successful, the value of the request's {{domxref("IDBRequest.result", "result")}} property is the key for the updated record.

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if this IDBCursor's transaction is inactive.
- `ReadOnlyError` {{domxref("DOMException")}}
  - : Thrown if the transaction mode is read-only.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the cursor was created using {{domxref("IDBindex.openKeyCursor")}}, is currently being iterated, or has iterated past its end.
- `DataError` {{domxref("DOMException")}}
  - : Thrown if the underlying object store uses in-line keys and the property in the value at the object store's key path does not match the key in this
    cursor's position.
- `DataCloneError` {{domxref("DOMException")}}
  - : Thrown if the data being stored could not be cloned by the internal structured
    cloning algorithm.

## Examples

In this simple fragment we create a transaction, retrieve an object store, then use a
cursor to iterate through all the records in the object store. If the
`albumTitle` of the current cursor is "A farewell to kings", we update year
the album was released using `const request = cursor.update();`.

Note that you cannot change primary keys using `cursor.update()`, hence us
not changing the album title; this would ruin the integrity of the data. In such a
situation, you would have to delete the record altogether and then add a new one using
{{domxref("IDBObjectStore.add")}}. Note also that you can't directly put
`cursor.value` into an update call, hence the below example using an
intermediary `updateData` variable.

The cursor does not require us to select the data based
on a key; we can just grab all of it. Also note that in each iteration of the loop,
you can grab data from the current record under the cursor object using `cursor.value.foo`. For a complete working example, see our [IDBCursor example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([View the example live](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

```js
function updateResult() {
  list.textContent = "";
  const transaction = db.transaction(["rushAlbumList"], "readwrite");
  const objectStore = transaction.objectStore("rushAlbumList");

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      if (cursor.value.albumTitle === "A farewell to kings") {
        const updateData = cursor.value;

        updateData.year = 2050;
        const request = cursor.update(updateData);
        request.onsuccess = () => {
          console.log("A better album year?");
        };
      }

      const listItem = document.createElement("li");
      listItem.textContent = `${cursor.value.albumTitle}, ${cursor.value.year}`;
      list.appendChild(listItem);
      cursor.continue();
    } else {
      console.log("Entries displayed.");
    }
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
