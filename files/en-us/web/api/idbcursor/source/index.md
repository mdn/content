---
title: IDBCursor.source
slug: Web/API/IDBCursor/source
tags:
  - API
  - Database
  - IDBCursor
  - IndexedDB
  - Property
  - Reference
  - Storage
  - source
browser-compat: api.IDBCursor.source
---
{{APIRef("IndexedDB")}}

The **`source`** read-only property of the
{{domxref("IDBCursor")}} interface returns the {{domxref("IDBObjectStore")}} or
{{domxref("IDBIndex")}} that the cursor is iterating over. This function never returns
null or throws an exception, even if the cursor is currently being iterated, has
iterated past its end, or its transaction is not active.

{{AvailableInWorkers}}

## Syntax

```js
var source = cursor.source;
```

### Value

The {{domxref("IDBObjectStore")}} or {{domxref("IDBIndex")}} that the cursor is
iterating over.

## Example

In this simple fragment we create a transaction, retrieve an object store, then use a
cursor to iterate through all the records in the object store. Within each iteration we
log the source of the cursor, which will log our {{domxref("IDBobjectStore")}} object to
the console, something like this:

```json
IDBObjectStore {autoIncrement: false, transaction: IDBTransaction, indexNames: DOMStringList, keyPath: "albumTitle", name: "rushAlbumList"…}
```

The cursor does not require us to select the data based
on a key; we can just grab all of it. Also note that in each iteration of the loop,
you can grab data from the current record under the cursor object using `cursor.value.foo`. For a complete working example, see our [IDBCursor
example](https://github.com/mdn/indexeddb-examples/blob/master/idbcursor) ([view example live](https://mdn.github.io/indexeddb-examples/idbcursor/).)

```js
function displayData() {
  var transaction = db.transaction(['rushAlbumList'], "readonly");
  var objectStore = transaction.objectStore('rushAlbumList');

  objectStore.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    if(cursor) {
      var listItem = document.createElement('li');
      listItem.innerHTML = cursor.value.albumTitle + ', ' + cursor.value.year;
      list.appendChild(listItem);

      console.log(cursor.source);
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
