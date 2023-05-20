---
title: "IDBCursor: source property"
short-title: source
slug: Web/API/IDBCursor/source
page-type: web-api-instance-property
browser-compat: api.IDBCursor.source
---

{{APIRef("IndexedDB")}}

The **`source`** read-only property of the
{{domxref("IDBCursor")}} interface returns the {{domxref("IDBObjectStore")}} or
{{domxref("IDBIndex")}} that the cursor is iterating over. This function never returns
null or throws an exception, even if the cursor is currently being iterated, has
iterated past its end, or its transaction is not active.

{{AvailableInWorkers}}

## Value

The {{domxref("IDBObjectStore")}} or {{domxref("IDBIndex")}} that the cursor is
iterating over.

## Examples

In this simple fragment we create a transaction, retrieve an object store, then use a
cursor to iterate through all the records in the object store. Within each iteration we
log the source of the cursor, which will log our {{domxref("IDBObjectStore")}} object to
the console, something like this:

```json
IDBObjectStore {autoIncrement: false, transaction: IDBTransaction, indexNames: DOMStringList, keyPath: "albumTitle", name: "rushAlbumList"…}
```

The cursor does not require us to select the data based
on a key; we can just grab all of it. Also note that in each iteration of the loop,
you can grab data from the current record under the cursor object using `cursor.value.foo`. For a complete working example, see our [IDBCursor example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([View the example live](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

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

      console.log(cursor.source);
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
