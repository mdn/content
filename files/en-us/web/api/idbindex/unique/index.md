---
title: IDBIndex.unique
slug: Web/API/IDBIndex/unique
tags:
  - API
  - Database
  - IDBIndex
  - IndexedDB
  - Property
  - Reference
  - Storage
  - unique
browser-compat: api.IDBIndex.unique
---
{{ APIRef("IndexedDB") }}

The **`unique`** read-only property returns a boolean that
states whether the index allows duplicate keys.

This is decided when the index is created, using the
{{domxref("IDBObjectStore.createIndex")}} method. This method takes an optional
parameter, `unique`, which if set to `true` means that the index
will not be able to accept duplicate entries.

{{AvailableInWorkers}}

## Syntax

```js
var isUnique = IDBIndex.unique;
```

### Value

A boolean value:

| Value   | Effect                                                       |
| ------- | ------------------------------------------------------------ |
| `true`  | The current index does not allow duplicate values for a key. |
| `false` | The current index allows duplicate key values.               |

## Example

In the following example we open a transaction and an object store, then get the
index `lName` from a simple contacts database. We then open a basic cursor on
the index using {{domxref("IDBIndex.openCursor")}} — this works the same as opening a
cursor directly on an `ObjectStore` using
{{domxref("IDBObjectStore.openCursor")}} except that the returned records are sorted
based on the index, not the primary key.

The unique status of the index is logged to the console: it should be returned
as `false`.

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
  console.log(myIndex.unique);

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
