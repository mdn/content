---
title: IDBIndex.keyPath
slug: Web/API/IDBIndex/keyPath
page-type: web-api-instance-property
tags:
  - API
  - Database
  - IDBIndex
  - IndexedDB
  - Property
  - Reference
  - Storage
  - keyPath
browser-compat: api.IDBIndex.keyPath
---
{{ APIRef("IndexedDB") }}

The **`keyPath`** property of the {{domxref("IDBIndex")}}
interface returns the [key path](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) of the current index. If null, this index is not auto-populated.

{{AvailableInWorkers}}

## Value

Any data type that can be used as a key path.

## Examples

In the following example we open a transaction and an object store, then get the
index `lName` from a simple contacts database. We then open a basic cursor on
the index using {{domxref("IDBIndex.openCursor")}} — this works the same as opening a
cursor directly on an `ObjectStore` using
{{domxref("IDBObjectStore.openCursor")}} except that the returned records are sorted
based on the index, not the primary key.

The key path of the current index is logged to the console: it should be returned
as `lName`.

Finally, we iterate through each record, and insert the data into an HTML table. For a
complete working example, see our [IndexedDB-examples demo repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([View the example live](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

```js
function displayDataByIndex() {
  tableEntry.innerHTML = '';
  const transaction = db.transaction(['contactsList'], 'readonly');
  const objectStore = transaction.objectStore('contactsList');

  const myIndex = objectStore.index('lName');
  console.log(myIndex.keyPath);

  myIndex.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `<td>${cursor.value.id}</td>`
                         + `<td>${cursor.value.lName}</td>`
                         + `<td>${cursor.value.fName}</td>`
                         + `<td>${cursor.value.jTitle}</td>`
                         + `<td>${cursor.value.company}</td>`
                         + `<td>${cursor.value.eMail}</td>`
                         + `<td>${cursor.value.phone}</td>`
                         + `<td>${cursor.value.age}</td>`;
      tableEntry.appendChild(tableRow);

      cursor.continue();
    } else {
      console.log('Entries all displayed.');
    }
  };
};
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
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([View the example live](https://mdn.github.io/to-do-notifications/)).
