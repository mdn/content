---
title: IDBCursor
slug: Web/API/IDBCursor
page-type: web-api-interface
browser-compat: api.IDBCursor
---

{{APIRef("IndexedDB")}}

> **Note:** Not to be confused with {{domxref("IDBCursorWithValue")}} which is just an **`IDBCursor`** interface with an additional **`value`** property.

The **`IDBCursor`** interface of the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) represents a [cursor](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#cursor) for traversing or iterating over multiple records in a database.

The cursor has a source that indicates which index or object store it is iterating over. It has a position within the range, and moves in a direction that is increasing or decreasing in the order of record keys. The cursor enables an application to asynchronously process all the records in the cursor's range.

You can have an unlimited number of cursors at the same time. You always get the same `IDBCursor` object representing a given cursor. Operations are performed on the underlying index or object store.

{{AvailableInWorkers}}

## Instance properties

> **Note:** {{domxref("IDBCursorWithValue")}} is an **`IDBCursor`** interface with an additional **`value`** property.

- {{domxref("IDBCursor.source")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("IDBObjectStore")}} or {{domxref("IDBIndex")}} that the cursor is iterating. This function never returns null or throws an exception, even if the cursor is currently being iterated, has iterated past its end, or its transaction is not active.
- {{domxref("IDBCursor.direction")}} {{ReadOnlyInline}}
  - : Returns the direction of traversal of the cursor. See [Constants](#const_next) for possible values.
- {{domxref("IDBCursor.key")}} {{ReadOnlyInline}}
  - : Returns the key for the record at the cursor's position. If the cursor is outside its range, this is set to `undefined`. The cursor's key can be any data type.
- {{domxref("IDBCursor.primaryKey")}} {{ReadOnlyInline}}
  - : Returns the cursor's current effective primary key. If the cursor is currently being iterated or has iterated outside its range, this is set to `undefined`. The cursor's primary key can be any data type.
- {{domxref("IDBCursor.request")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("IDBRequest")}} that was used to obtain the cursor.

## Instance methods

- {{domxref("IDBCursor.advance()")}}
  - : Sets the number of times a cursor should move its position forward.
- {{domxref("IDBCursor.continue()")}}
  - : Advances the cursor to the next position along its direction, to the item whose key matches the optional `key` parameter.
- {{domxref("IDBCursor.continuePrimaryKey()")}}
  - : Sets the cursor to the given index key and primary key given as arguments.
- {{domxref("IDBCursor.delete()")}}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread, deletes the record at the cursor's position, without changing the cursor's position. This can be used to delete specific records.
- {{domxref("IDBCursor.update()")}}
  - : Returns an {{domxref("IDBRequest")}} object, and, in a separate thread, updates the value at the current position of the cursor in the object store. This can be used to update specific records.

## Constants

{{Deprecated_Header}}

> **Warning:** These constants are no longer available — they were removed in Gecko 25. You should use the string constants directly instead. ([Firefox bug 891944](https://bugzil.la/891944))

- `NEXT`: `"next"` : The cursor shows all records, including duplicates. It starts at the lower bound of the key range and moves upwards (monotonically increasing in the order of keys).
- `NEXTUNIQUE` : `"nextunique"` : The cursor shows all records, excluding duplicates. If multiple records exist with the same key, only the first one iterated is retrieved. It starts at the lower bound of the key range and moves upwards.
- `PREV`: `"prev"` : The cursor shows all records, including duplicates. It starts at the upper bound of the key range and moves downwards (monotonically decreasing in the order of keys).
- `PREVUNIQUE`: `"prevunique"` : The cursor shows all records, excluding duplicates. If multiple records exist with the same key, only the first one iterated is retrieved. It starts at the upper bound of the key range and moves downwards.

## Examples

In this simple fragment we create a transaction, retrieve an object store, then use a cursor to iterate through all the records in the object store. The cursor does not require us to select the data based on a key; we can just grab all of it. Also note that in each iteration of the loop, you can grab data from the current record under the cursor object using `cursor.value.foo`. For a complete working example, see our [IDBCursor example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([view example live](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/).)

```js
function displayData() {
  const transaction = db.transaction(["rushAlbumList"], "readonly");
  const objectStore = transaction.objectStore("rushAlbumList");

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const listItem = document.createElement("li");
      listItem.textContent = `${cursor.value.albumTitle}, ${cursor.value.year}`;
      list.appendChild(listItem);

      cursor.continue();
    } else {
      console.log("Entries all displayed.");
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
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/)).
