---
title: IDBIndex.objectStore
slug: Web/API/IDBIndex/objectStore
tags:
  - API
  - Database
  - IDBIndex
  - IndexedDB
  - Property
  - Reference
  - Storage
  - objectStore
browser-compat: api.IDBIndex.objectStore
---
{{ APIRef("IndexedDB") }}

The **`objectStore`** property of the {{domxref("IDBIndex")}}
interface returns the name of the object store referenced by the current index.

{{AvailableInWorkers}}

## Syntax

```js
var myIDBObjectStore = myIndex.objectStore;
```

### Value

An {{ domxref("IDBObjectStore") }}.

## Example

In the following example we open a transaction and an object store, then get the
index `lName` from a simple contacts database. We then open a basic cursor on
the index using {{domxref("IDBIndex.openCursor")}}. This works the same as opening a
cursor directly on an `ObjectStore` using
{{domxref("IDBObjectStore.openCursor")}} except that the returned records are sorted
based on the index, not the primary key.

The current object store is logged to the console: it should be returned something like
this:

```json
IDBObjectStore { name: "contactsList", keyPath: "id", indexNames: DOMStringList[7], transaction: IDBTransaction, autoIncrement: false }
```

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
  console.log(myIndex.objectStore);

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
