---
title: "IDBCursor: direction property"
short-title: direction
slug: Web/API/IDBCursor/direction
page-type: web-api-instance-property
browser-compat: api.IDBCursor.direction
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

The **`direction`** read-only property of the
{{domxref("IDBCursor")}} interface is a string that returns the
direction of traversal of the cursor (set using
{{domxref("IDBObjectStore.openCursor")}} for example). See the [Value](#value)
section below for possible values.

## Value

A string indicating the direction in which the cursor is traversing the data.
Possible values are:

- `next`
  - : This direction causes the cursor to be opened at the start of the source.
- `nextunique`
  - : This direction causes the cursor to be opened at the start of the source.
    For every key with duplicate values, only the first-visited record (closest to the start) is yielded.
- `prev`
  - : This direction causes the cursor to be opened at the end of the source.
- `prevunique`
  - : This direction causes the cursor to be opened at the end of the source.
    For every key with duplicate values, only the first-visited record (closest to the end) is yielded.

## Examples

In this simple fragment we create a transaction, retrieve an object store, then use a
cursor to iterate through all the records in the object store. Within each iteration we
log the direction of the cursor.

> [!NOTE]
> We can't change the direction of travel of the cursor using
> the `direction` property, as it is read-only. We specify the direction of
> travel using the 2nd argument of {{domxref("IDBObjectStore.openCursor")}}.

The cursor does not require us to select the data based on a key; we can just grab all
of it. Also note that in each iteration of the loop, you can grab data from the current
record under the cursor object using `cursor.value.foo`. For a complete
working example, see our [IDBCursor example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([View the example live](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

```js
function backwards() {
  list.textContent = "";
  const transaction = db.transaction(["rushAlbumList"], "readonly");
  const objectStore = transaction.objectStore("rushAlbumList");

  objectStore.openCursor(null, "prev").onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const listItem = document.createElement("li");
      listItem.textContent = `${cursor.value.albumTitle}, ${cursor.value.year}`;
      list.appendChild(listItem);

      console.log(cursor.direction);
      cursor.continue();
    } else {
      console.log("Entries displayed backwards.");
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
