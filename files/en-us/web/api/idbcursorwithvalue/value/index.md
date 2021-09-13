---
title: IDBCursorWithValue.value
slug: Web/API/IDBCursorWithValue/value
tags:
  - API
  - Database
  - IDBCursorWithValue
  - IndexedDB
  - Property
  - Reference
  - Storage
  - value
browser-compat: api.IDBCursorWithValue.value
---
{{ APIRef("IndexedDB") }}

The **`value`** read-only property of the
{{domxref("IDBCursorWithValue")}} interface returns the value of the current cursor,
whatever that is.

{{AvailableInWorkers}}

## Syntax

```js
var value = myIDBCursorWithValue.value;
```

### Value

The value of the current cursor.

## Example

In this example we create a transaction, retrieve an object store, then use a cursor to
iterate through all the records in the object store. Within each iteration we log the
value of the cursor with `cursor.value`.

The cursor does not require us to select the data based
on a key; we can just grab all of it. Also note that in each iteration of the loop,
you can grab data from the current record under the cursor object using `cursor.value.foo`.
For a complete working example, see our [IDBCursor example](https://github.com/mdn/IDBcursor-example/) 
([view example live](https://mdn.github.io/IDBcursor-example/).)

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

      console.log(cursor.value);
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
