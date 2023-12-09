---
title: "IDBCursor: delete() method"
short-title: delete()
slug: Web/API/IDBCursor/delete
page-type: web-api-instance-method
browser-compat: api.IDBCursor.delete
---

{{APIRef("IndexedDB")}}

The **`delete()`** method of the {{domxref("IDBCursor")}}
interface returns an {{domxref("IDBRequest")}} object, and, in a separate thread,
deletes the record at the cursor's position, without changing the cursor's position.
Once the record is deleted, the cursor's value is set to null.

Be aware that you can't call `delete()` (or
{{domxref("IDBCursor.update()")}}) on cursors obtained from
{{domxref("IDBIndex.openKeyCursor()")}}. For such needs, you have to use
{{domxref("IDBIndex.openCursor()")}} instead.

{{AvailableInWorkers}}

## Syntax

```js-nolint
delete()
```

### Parameters

None.

### Return value

An {{domxref("IDBRequest")}} object on which subsequent events related to this
operation are fired.

If the operation is successful, the value of the request's {{domxref("IDBRequest.result", "result")}} property is `undefined`.

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if this IDBCursor's transaction is inactive.
- `ReadOnlyError` {{domxref("DOMException")}}
  - : Thrown if the transaction mode is read-only.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the cursor was created using {{domxref("IDBindex.openKeyCursor")}}, is currently being iterated, or has iterated past its end.

## Examples

In this simple fragment we create a transaction, retrieve an object store, then use a
cursor to iterate through all the records in the object store. If the
`albumTitle` of the current cursor is "Grace under pressure", we delete that
entire record using `const request = cursor.delete();`.

The cursor does not require us to select the data based on a key; we can just grab all
of it. Also note that in each iteration of the loop, you can grab data from the current
record under the cursor object using `cursor.value.foo`. For a complete
working example, see our [IDBCursor example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([View the example live](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

```js
function deleteResult() {
  list.textContent = "";
  const transaction = db.transaction(["rushAlbumList"], "readwrite");
  const objectStore = transaction.objectStore("rushAlbumList");

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      if (cursor.value.albumTitle === "Grace under pressure") {
        const request = cursor.delete();
        request.onsuccess = () => {
          console.log(
            "Deleted that mediocre album from 1984. Even Power windows is better.",
          );
        };
      } else {
        const listItem = document.createElement("li");
        listItem.textContent = `${cursor.value.albumTitle}, ${cursor.value.year}`;
        list.appendChild(listItem);
      }
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
