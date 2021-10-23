---
title: IDBIndex.openKeyCursor()
slug: Web/API/IDBIndex/openKeyCursor
tags:
  - API
  - Database
  - IDBIndex
  - IndexedDB
  - Method
  - Reference
  - Storage
  - openKeyCursor
browser-compat: api.IDBIndex.openKeyCursor
---
{{ APIRef("IndexedDB") }}

The **`openKeyCursor()`** method of the
{{domxref("IDBIndex")}} interface returns an {{domxref("IDBRequest")}} object, and, in
a separate thread, creates a cursor over the specified key range, as arranged by this
index.

The method sets the position of the cursor to the appropriate key, based on the
specified direction.

If the key range is not specified or is null, then the range includes all the keys.

> **Note:** Cursors returned by `openKeyCursor()` do not
> make the referenced value available as [`IDBIndex.openCursor`](/en-US/docs/Web/API/IDBIndex/openCursor) does.
> This makes obtaining a list of keys much more efficient.

{{AvailableInWorkers}}

## Syntax

```js
var request = myIndex.openKeyCursor();
var request = myIndex.openKeyCursor(range);
var request = myIndex.openKeyCursor(range, direction);
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
index `lName` from a simple contacts database. We then open a key cursor on
the index using `openKeyCursor()` — this works the same as opening a cursor
directly on an `ObjectStore` using
{{domxref("IDBObjectStore.openKeyCursor")}} except that the returned records are sorted
based on the index, not the primary key.

Finally, we iterate through each record in the index, and insert the last name and the
corresponding primary key of the referenced record into an HTML table.

```js
function displayDataByIndex() {
  tableEntry.innerHTML = '';
  var transaction = db.transaction(['contactsList'], 'readonly');
  var objectStore = transaction.objectStore('contactsList');

  var myIndex = objectStore.index('lName');

  myIndex.openKeyCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    if(cursor) {
      var tableRow = document.createElement('tr');
      tableRow.innerHTML =   '<td>' + cursor.key + '</td>'
                           + '<td>' + cursor.primaryKey + '</td>';
      tableEntry.appendChild(tableRow);

      cursor.continue();
    } else {
      console.log('All last names displayed.');
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
