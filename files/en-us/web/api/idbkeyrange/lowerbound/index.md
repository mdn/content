---
title: IDBKeyRange.lowerBound()
slug: Web/API/IDBKeyRange/lowerBound
tags:
  - API
  - Database
  - IDBKeyRange
  - IndexedDB
  - Method
  - Reference
  - Storage
  - lowerBound
browser-compat: api.IDBKeyRange.lowerBound
---
{{ APIRef("IndexedDB") }}

The **`lowerBound()`** method of the
{{domxref("IDBKeyRange")}} interface creates a new key range with only a lower bound.
By default, it includes the lower endpoint value and is closed.

{{AvailableInWorkers}}

## Syntax

```js
var myIDBKeyRange = IDBKeyRange.lowerBound(lower);
var myIDBKeyRange = IDBKeyRange.lowerBound(lower, open);
```

### Parameters

- lower
  - : specifies the lower bound of the new key range.
- open {{optional_inline}}
  - : indicates whether the lower bound excludes the endpoint value. The default is
    false.

### Return value

{{domxref("IDBKeyRange")}}: The newly created key range.

### Exceptions

This method may raise a {{domxref("DOMException")}} of the following type:

| Exception   | Description                                     |
| ----------- | ----------------------------------------------- |
| `DataError` | The value parameter passed was not a valid key. |

## Example

The following example illustrates how you'd use a lower bound key range. Here we
declare `keyRangeValue = IDBKeyRange.lowerBound("F", false);` — a range that
includes the value "F" and everthing after it. We open a transaction (using
{{domxref("IDBTransaction")}}) and an object store, and open a Cursor with
{{domxref("IDBObjectStore.openCursor")}}, declaring `keyRangeValue` as its
optional key range value. This means that the cursor will only retrieve the record with
the key value "F" and all that come after it. If we used
`IDBKeyRange.lowerBound("F", true);`, then the range would not include "F";
only the values after it.

> **Note:** For a more complete example allowing you to experiment with
> key range, have a look at our [IDBKeyRange-example](https://github.com/mdn/indexeddb-examples/tree/master/idbkeyrange) repo
> ([view the example live
> too](https://mdn.github.io/indexeddb-examples/idbkeyrange/).)

```js
function displayData() {
  var keyRangeValue = IDBKeyRange.lowerBound("F");

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
