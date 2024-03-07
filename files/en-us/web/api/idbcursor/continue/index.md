---
title: "IDBCursor: continue() method"
short-title: continue()
slug: Web/API/IDBCursor/continue
page-type: web-api-instance-method
browser-compat: api.IDBCursor.continue
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

The **`continue()`** method of the {{domxref("IDBCursor")}}
interface advances the cursor to the next position along its direction, to the item
whose key matches the optional key parameter. If no key is specified, the cursor
advances to the immediate next position, based on its direction.

## Syntax

```js-nolint
continue()
continue(key)
```

### Parameters

- `key` {{optional_inline}}
  - : The key to position the cursor at.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if this IDBCursor's transaction is inactive.
- `DataError` {{domxref("DOMException")}}
  - : Thrown if the key parameter has any of the following conditions:
    - The key is not a valid key.
    - The key is less than or equal to this cursor's position, and the cursor's direction is `next` or `nextunique`.
    - The key is greater than or equal to this cursor's position and this cursor's direction is `prev` or `prevunique`.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the cursor is currently being iterated or has iterated past its end.

## Examples

In this simple fragment we create a transaction, retrieve an object store, then use a
cursor to iterate through all the records in the object store. The cursor does not
require us to select the data based on a key; we can just grab all of it. Also note that
in each iteration of the loop, you can grab data from the current record under the
cursor object using `cursor.value.foo`. For a complete working example, see
our [IDBCursor example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([View the example live](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

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
