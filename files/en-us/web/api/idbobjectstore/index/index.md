---
title: IDBObjectStore.index()
slug: Web/API/IDBObjectStore/index
tags:
  - API
  - Database
  - IDBObjectStore
  - Index
  - IndexedDB
  - Method
  - NeedsExample
  - Reference
  - Storage
browser-compat: api.IDBObjectStore.index
---
{{ APIRef("IndexedDB") }}

The **`index()`** method of the {{domxref("IDBObjectStore")}}
interface opens a named index in the current object store, after which it can be used
to, for example, return a series of records sorted by that index using a cursor.

{{AvailableInWorkers}}

## Syntax

```js
var index = objectStore.index(name);
```

### Parameters

- name
  - : The name of the index to open.

### Return value

An {{domxref("IDBIndex")}} object for accessing the index.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the source object store has been deleted, or the transaction for the object store has finished.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if there is no index with the given name (case-sensitive) in the database.

## Example

In the following example we open a transaction and an object store, then get the index
`lName` from a simple contacts database. We then open a basic cursor on the
index using {{domxref("IDBIndex.openCursor")}} — this works the same as opening a cursor
directly on an `ObjectStore` using {{domxref("IDBObjectStore.openCursor")}}
except that the returned records are sorted based on the index, not the primary key.

Finally, we iterate through each record, and insert the data into an HTML table. For a
complete working example, see our [IDBIndex example
in IndexedDB-examples demo repo](https://github.com/mdn/indexeddb-examples/tree/master/idbindex) ([View the example live](https://mdn.github.io/indexeddb-examples/idbindex).)

```js
function displayDataByIndex() {
  tableEntry.innerHTML = '';
  var transaction = db.transaction(['contactsList'], 'readonly');
  var objectStore = transaction.objectStore('contactsList');

  var myIndex = objectStore.index('lName');
  myIndex.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    if(cursor) {
      var tableRow = document.createElement('tr');
      tableRow.innerHTML =   '<td>' + cursor.value.id + '</td>'
                           + '<td>' + cursor.value.lName + '</td>'
                           + '<td>' + cursor.value.fName + '</td>'
                           + '<td>' + cursor.value.jTitle + '</td>'
                           + '<td>' + cursor.value.company + '</td>'
                           + '<td>' + cursor.value.eMail + '</td>'
                           + '<td>' + cursor.value.phone + '</td>'
                           + '<td>' + cursor.value.age + '</td>';
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
- Reference example: [To-do
  Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/).)
