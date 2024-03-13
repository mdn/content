---
title: "IDBIndex: openCursor() method"
short-title: openCursor()
slug: Web/API/IDBIndex/openCursor
page-type: web-api-instance-method
browser-compat: api.IDBIndex.openCursor
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

The **`openCursor()`** method of the {{domxref("IDBIndex")}}
interface returns an {{domxref("IDBRequest")}} object, and, in a separate thread,
creates a [cursor](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#cursor) over the specified key
range.

The method sets the position of the cursor to the appropriate record, based on the
specified direction.

If the key range is not specified or is null, then the range includes all the records.

## Syntax

```js-nolint
openCursor()
openCursor(range)
openCursor(range, direction)
```

### Parameters

- `range` {{optional_inline}}
  - : A key or {{domxref("IDBKeyRange")}} to use as the cursor's range. If nothing is
    passed, this will default to a key range that selects all the records in this object
    store.
- `direction` {{optional_inline}}
  - : The cursor's [direction](/en-US/docs/Web/API/IDBCursor#constants). See [IDBCursor Constants](/en-US/docs/Web/API/IDBCursor#constants) for possible
    values.

### Return value

An {{domxref("IDBRequest")}} object on which subsequent events related to this operation are fired.

If the operation is successful, the value of the request's {{domxref("IDBRequest.result", "result")}} property is:

- an {{domxref("IDBCursorWithValue")}} object pointing at the first record matching the given query
- `null` if no matching records were found.

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if this {{domxref("IDBIndex")}}'s transaction is inactive.
- {{jsxref("TypeError")}}
  - : Thrown if the value for the direction parameter is invalid.
- `DataError` {{domxref("DOMException")}}
  - : Thrown if the key or key range provided contains an invalid key.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("IDBIndex")}} has been deleted or removed.

## Examples

In the following example we open a transaction and an object store, then get the
index `lName` from a simple contacts database. We then open a basic cursor on
the index using `openCursor()` — this works the same as opening a cursor
directly on an `ObjectStore` using {{domxref("IDBObjectStore.openCursor")}}
except that the returned records are sorted based on the index, not the primary key.

Finally, we iterate through each record, and insert the data into an HTML table. For a
complete working example, see our [IndexedDB-examples demo repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([View the example live](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

```js
function displayDataByIndex() {
  tableEntry.innerHTML = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");

  myIndex.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const tableRow = document.createElement("tr");
      tableRow.innerHTML =
        `<td>${cursor.value.id}</td>` +
        `<td>${cursor.value.lName}</td>` +
        `<td>${cursor.value.fName}</td>` +
        `<td>${cursor.value.jTitle}</td>` +
        `<td>${cursor.value.company}</td>` +
        `<td>${cursor.value.eMail}</td>` +
        `<td>${cursor.value.phone}</td>` +
        `<td>${cursor.value.age}</td>`;
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
