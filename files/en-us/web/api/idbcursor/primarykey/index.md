---
title: IDBCursor.primaryKey
slug: Web/API/IDBCursor/primaryKey
tags:
  - API
  - Database
  - IDBCursor
  - IndexedDB
  - Property
  - Reference
  - Storage
  - primaryKey
browser-compat: api.IDBCursor.primaryKey
---
{{APIRef("IDBCursor")}}

The **`primaryKey`** read-only property of the
{{domxref("IDBCursor")}} interface returns the cursor's current effective key. If the
cursor is currently being iterated or has iterated outside its range, this is set to
undefined. The cursor's primary key can be any data type.

{{AvailableInWorkers}}

## Syntax

```js
var value = cursor.primaryKey;
```

### Value

A value of any data type.

## Example

In this simple fragment we create a transaction, retrieve an object store, then use a
cursor to iterate through all the records in the object store. Within each iteration we
log the primary key of the cursor to the console, something like this (its the album
title in each case, which is our primarykey):

    Hemispheres

The cursor does not require us to select the data based
on a key; we can just grab all of it. Also note that in each iteration of the loop,
you can grab data from the current record under the cursor object using `cursor.value.foo`. For a complete working example, see our [IDBCursor
example](https://github.com/mdn/indexeddb-examples/tree/master/idbcursor) (>[view example live](https://mdn.github.io/indexeddb-examples/idbcursor/).)

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

      console.log(cursor.primaryKey);
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
