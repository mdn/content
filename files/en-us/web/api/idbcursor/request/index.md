---
title: "IDBCursor: request property"
short-title: request
slug: Web/API/IDBCursor/request
page-type: web-api-instance-property
browser-compat: api.IDBCursor.request
---

{{APIRef("IndexedDB")}}

The **`request`** read-only property of the {{domxref("IDBCursor")}} interface returns the {{domxref("IDBRequest")}} used to obtain the cursor.

{{AvailableInWorkers}}

## Value

An {{domxref("IDBRequest")}} object instance.

## Examples

When you open a cursor, the `request` property is then available on that cursor object, to tell you what request object the cursor originated from. For example:

```js
function displayData() {
  list.textContent = "";
  const transaction = db.transaction(["rushAlbumList"], "readonly");
  const objectStore = transaction.objectStore("rushAlbumList");

  const request = objectStore.openCursor();

  request.onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const listItem = document.createElement("li");
      listItem.textContent = `${cursor.value.albumTitle}, ${cursor.value.year}`;
      list.appendChild(listItem);
      console.log(cursor.request);
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
