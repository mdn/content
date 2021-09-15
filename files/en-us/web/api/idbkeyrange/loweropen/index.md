---
title: IDBKeyRange.lowerOpen
slug: Web/API/IDBKeyRange/lowerOpen
tags:
  - API
  - Database
  - IDBKeyRange
  - IndexedDB
  - Property
  - Reference
  - Storage
  - lowerOpen
browser-compat: api.IDBKeyRange.lowerOpen
---
{{ APIRef("IndexedDB") }}

The **`lowerOpen`** read-only property of the
{{domxref("IDBKeyRange")}} interface returns a boolean indicating whether the
lower-bound value is included in the key range.

{{AvailableInWorkers}}

## Syntax

```js
var lowerOpen = myKeyRange.lowerOpen
```

### Value

A boolean value:

| Value   | Indication                                              |
| ------- | ------------------------------------------------------- |
| `true`  | The lower-bound value is not included in the key range. |
| `false` | The lower-bound value is included in the key range.     |

## Example

The following example illustrates how you'd use a key range. Here we
declare `keyRangeValue = IDBKeyRange.upperBound("F", "W", true, true);` — a
range that includes everything between "F" and "W" but not including them — since both
the upper and lower bounds have been declared as open (`true`). We open a
transaction (using {{domxref("IDBTransaction")}}) and an object store, and open a Cursor
with {{domxref("IDBObjectStore.openCursor")}}, declaring `keyRangeValue` as
its optional key range value.

After declaring the key range, we log its `lowerOpen` property value to the
console, which should appear as "true": the lower bound is open, so won't be included in
the range.

> **Note:** For a more complete example allowing you to experiment with
> key range, have a look at our [IDBKeyRange-example](https://github.com/mdn/IDBKeyRange-example) repo ([view the example live too](https://mdn.github.io/IDBKeyRange-example/).)

```js
function displayData() {
  var keyRangeValue = IDBKeyRange.bound("F", "W", true, true);
  console.log(keyRangeValue.lowerOpen);

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
