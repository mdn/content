---
title: "IDBObjectStore: index() method"
short-title: index()
slug: Web/API/IDBObjectStore/index
page-type: web-api-instance-method
browser-compat: api.IDBObjectStore.index
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

The **`index()`** method of the {{domxref("IDBObjectStore")}}
interface opens a named index in the current object store, after which it can be used
to, for example, return a series of records sorted by that index using a cursor.

## Syntax

```js-nolint
index(name)
```

### Parameters

- `name`
  - : The name of the index to open.

### Return value

An {{domxref("IDBIndex")}} object for accessing the index.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the source object store has been deleted, or the transaction for the object store has finished.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if there is no index with the given name (case-sensitive) in the database.

## Examples

In the following example we open a transaction and an object store, then get the index
`lName` from a simple contacts database. We then open a basic cursor on the
index using {{domxref("IDBIndex.openCursor")}} — this works the same as opening a cursor
directly on an `ObjectStore` using {{domxref("IDBObjectStore.openCursor")}}
except that the returned records are sorted based on the index, not the primary key.

Finally, we iterate through each record, and insert the data into an HTML table. For a
complete working example, see our [IDBIndex example in IndexedDB-examples demo repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([View the example live](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/).)

```js
function displayDataByIndex() {
  tableEntry.textContent = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");
  myIndex.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const tableRow = document.createElement("tr");
      for (const cell of [
        cursor.value.id,
        cursor.value.lName,
        cursor.value.fName,
        cursor.value.jTitle,
        cursor.value.company,
        cursor.value.eMail,
        cursor.value.phone,
        cursor.value.age,
      ]) {
        const tableCell = document.createElement("td");
        tableCell.textContent = cell;
        tableRow.appendChild(tableCell);
      }
      tableEntry.appendChild(tableRow);

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
