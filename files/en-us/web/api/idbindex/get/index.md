---
title: IDBIndex.get()
slug: Web/API/IDBIndex/get
tags:
  - API
  - Database
  - IDBIndex
  - IndexedDB
  - Method
  - Reference
  - Storage
browser-compat: api.IDBIndex.get
---
{{ APIRef("IndexedDB") }}

The **`get()`** method of the {{domxref("IDBIndex")}}
interface returns an {{domxref("IDBRequest")}} object, and, in a separate thread,
finds either the value in the referenced object store that corresponds to the given
key or the first corresponding value, if `key` is set to an
{{domxref("IDBKeyRange")}}.

If a value is found, then a structured clone of it is created and set as the
`result` of the request object: this returns the record the key is associated
with.

{{AvailableInWorkers}}

## Syntax

```js
var request = myIndex.get(key);
```

### Parameters

- key {{optional_inline}}
  - : A key or {{domxref("IDBKeyRange")}} that identifies the record to be retrieved. If
    this value is null or missing, the browser will use an unbound key range.

### Return value

An {{domxref("IDBRequest")}} object on which subsequent events related to this
operation are fired.

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

| Exception                  | Description                                            |
| -------------------------- | ------------------------------------------------------ |
| `TransactionInactiveError` | This IDBIndex's transaction is inactive.               |
| `DataError`                | The key or key range provided contains an invalid key. |
| `InvalidStateError`        | The IDBIndex has been deleted or removed.              |

## Example

In the following example we open a transaction and an object store, then get the
index `lName` from a simple contacts database. We then open a basic cursor on
the index using {{domxref("IDBIndex.openCursor")}} — this works the same as opening a
cursor directly on an `ObjectStore` using
{{domxref("IDBObjectStore.openCursor")}} except that the returned records are sorted
based on the index, not the primary key.

`myIndex.get('Bungle')` is then used to retrieve the record with an
`lName` of `Bungle`, and the result of that request is logged to
the console when its success callback returns.

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
  var getRequest = myIndex.get('Bungle');
  getRequest.onsuccess = function() {
    console.log(getRequest.result);
  }

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
