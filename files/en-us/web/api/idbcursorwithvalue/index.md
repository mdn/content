---
title: IDBCursorWithValue
slug: Web/API/IDBCursorWithValue
page-type: web-api-interface
browser-compat: api.IDBCursorWithValue
---

{{APIRef("IndexedDB")}}

The **`IDBCursorWithValue`** interface of the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) represents a [cursor](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#cursor) for traversing or iterating over multiple records in a database. It is the same as the {{domxref("IDBCursor")}}, except that it includes the `value` property.

The cursor has a source that indicates which index or object store it is iterating over. It has a position within the range, and moves in a direction that is increasing or decreasing in the order of record keys. The cursor enables an application to asynchronously process all the records in the cursor's range.

You can have an unlimited number of cursors at the same time. You always get the same `IDBCursorWithValue` object representing a given cursor. Operations are performed on the underlying index or object store.

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## Instance methods

Inherits methods from its parent interface, {{domxref("IDBCursor")}}.

## Instance properties

Inherits properties from its parent interface, {{domxref("IDBCursor")}}.

- {{domxref("IDBCursorWithValue.value")}} {{ReadOnlyInline}}
  - : Returns the value of the current cursor.

## Example

In this example we create a transaction, retrieve an object store, then use a cursor to iterate through all the records in the object store. The cursor does not require us to select the data based on a key; we can just grab all of it. Also note that in each iteration of the loop, you can grab data from the current record under the cursor object using `cursor.value.foo`. For a complete working example, see our [IDBCursor example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([view example live](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/).)

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
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([View the example live](https://mdn.github.io/dom-examples/to-do-notifications/)).
