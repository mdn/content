---
title: IDBIndex.name
slug: Web/API/IDBIndex/name
tags:
  - API
  - Database
  - IDBIndex
  - IndexedDB
  - Property
  - Reference
  - Storage
  - name
browser-compat: api.IDBIndex.name
---
{{ APIRef("IndexedDB") }}

The **`name`** property of the {{domxref("IDBIndex")}}
interface contains a string which names the index.

{{AvailableInWorkers}}

## Syntax

```js
var indexName = IDBIndex.name;
IDBIndex.name = indexName;
```

### Value

A {{domxref("DOMString")}} specifying a name for the index.

### Exceptions

There are a several exceptions that can occur when you attempt to change an index's
name.

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the index, or its object store, has been deleted or if the current transaction is not
    an upgrade transaction. You can only rename indexes during upgrade transactions; that
    is, when the mode is `"versionchange"`.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Thrown if the current transaction is not active.
- `ConstraintError` {{domxref("DOMException")}}
  - : Thrown if an index is already using the specified `name`.

## Example

In the following example we open a transaction and an object store, then get the
index `lName` from a simple contacts database. We then open a basic cursor on
the index using {{domxref("IDBIndex.openCursor()")}} — this works the same as opening a
cursor directly on an {{domxref("IDBObjectStore")}} using
{{domxref("IDBObjectStore.openCursor", "openCursor()")}} except that the returned
records are sorted based on the index, not the primary key.

The name of the index is logged to the console: it should be returned as
`lName`.

Finally, we iterate through each record, inserting the data into an HTML table. For a
complete working example, see our [IndexedDB-examples
demo repo](https://github.com/mdn/indexeddb-examples/tree/master/idbindex) ([View the
example live](https://mdn.github.io/indexeddb-examples/idbindex)).

```js
function displayDataByIndex() {
  tableEntry.innerHTML = '';
  var transaction = db.transaction(['contactsList'], 'readonly');
  var objectStore = transaction.objectStore('contactsList');

  var myIndex = objectStore.index('lName');
  console.log(myIndex.name);

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
