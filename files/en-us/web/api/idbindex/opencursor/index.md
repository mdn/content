---
title: IDBIndex.openCursor()
slug: Web/API/IDBIndex/openCursor
tags:
  - API
  - Database
  - IDBIndex
  - IndexedDB
  - Method
  - Reference
  - Storage
  - openCursor
browser-compat: api.IDBIndex.openCursor
---
{{ APIRef("IndexedDB") }}

The **`openCursor()`** method of the {{domxref("IDBIndex")}}
interface returns an {{domxref("IDBRequest")}} object, and, in a separate thread,
creates a [cursor](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology#cursor) over the specified key
range.

The method sets the position of the cursor to the appropriate record, based on the
specified direction.

If the key range is not specified or is null, then the range includes all the records.

{{AvailableInWorkers}}

## Syntax

```js
var request = myIndex.openCursor();
var request = myIndex.openCursor(range);
var request = myIndex.openCursor(range, direction);
```

### Parameters

- range {{optional_inline}}
  - : A key or {{domxref("IDBKeyRange")}} to use as the cursor's range. If nothing is
    passed, this will default to a key range that selects all the records in this object
    store.
- direction {{optional_inline}}
  - : The cursor's [direction](/en-US/docs/Web/API/IDBCursor#constants). See [IDBCursor Constants](/en-US/docs/Web/API/IDBCursor#constants) for possible
    values.

### Return value

An {{domxref("IDBRequest")}} object on which subsequent events related to this
operation are fired.

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if this {{domxref("IDBIndex")}}'s transaction is inactive.
- `TypeError` {{domxref("DOMException")}}
  - : Thrown if the value for the direction parameter is invalid.
- `DataError` {{domxref("DOMException")}}
  - : Thrown if the key or key range provided contains an invalid key.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("IDBIndex")}} has been deleted or removed.

## Example

In the following example we open a transaction and an object store, then get the
index `lName` from a simple contacts database. We then open a basic cursor on
the index using `openCursor()` — this works the same as opening a cursor
directly on an `ObjectStore` using {{domxref("IDBObjectStore.openCursor")}}
except that the returned records are sorted based on the index, not the primary key.

Finally, we iterate through each record, and insert the data into an HTML table. For a
complete working example, see our [IndexedDB-examples
demo repo](https://github.com/mdn/indexeddb-examples/tree/master/idbindex) ([View the
example live](https://mdn.github.io/indexeddb-examples/idbindex).)

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
