---
title: IDBKeyRange.only()
slug: Web/API/IDBKeyRange/only
tags:
  - API
  - Database
  - IDBKeyRange
  - IndexedDB
  - Method
  - Reference
  - Storage
  - only
browser-compat: api.IDBKeyRange.only
---
{{ APIRef("IndexedDB") }}

The **`only()`** method of the {{domxref("IDBKeyRange")}}
interface creates a new key range containing a single value.

{{AvailableInWorkers}}

## Syntax

```js
var myIDBKeyRange = IDBKeyRange.only(value);
```

### Parameters

*value* is the value for the new key range.

### Return value

{{domxref("IDBKeyRange")}}: The newly created key range.

### Exceptions

This method may raise a {{domxref("DOMException")}} of the following types:

| Exception   | Description                                     |
| ----------- | ----------------------------------------------- |
| `DataError` | The value parameter passed was not a valid key. |

## Example

The following example illustrates how you'd use an only key range. Here we declare
a `keyRangeValue = IDBKeyRange.only("A");` — a range that only includes the
value "A". We open a transaction (using {{domxref("IDBTransaction")}}) and an object
store, and open a Cursor with {{domxref("IDBObjectStore.openCursor")}},
declaring `keyRangeValue` as its optional key range value. This means that
the cursor will only retrieve the record with the key value "A".

> **Note:** For a more complete example allowing you to experiment with
> key range, have a look at our [IDBKeyRange](https://github.com/mdn/indexeddb-examples/tree/master/idbkeyrange)
> repo ([view the example
> live too](https://mdn.github.io/indexeddb-examples/idbkeyrange/).)

```js
function displayData() {
  var keyRangeValue = IDBKeyRange.only("A");

  var transaction = db.transaction(['fThings'], 'readonly');
  var objectStore = transaction.objectStore('fThings');

  objectStore.openCursor(keyRangeValue).onsuccess = function(event) {
    var cursor = event.target.result;
      if(cursor) {
        var listItem = document.createElement('li');
        listItem.innerHTML = '<strong>' + cursor.value.fThing + '</strong>, ' + cursor.value.fRating;
        list.appendChild(listItem);

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
