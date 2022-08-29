---
title: IDBKeyRange.upperOpen
slug: Web/API/IDBKeyRange/upperOpen
page-type: web-api-instance-property
tags:
  - API
  - Database
  - IDBKeyRange
  - IndexedDB
  - Property
  - Reference
  - Storage
  - upperOpen
browser-compat: api.IDBKeyRange.upperOpen
---
{{ APIRef("IndexedDB") }}

The **`upperOpen`** read-only property of the
{{domxref("IDBKeyRange")}} interface returns a boolean indicating whether the
upper-bound value is included in the key range.

{{AvailableInWorkers}}

## Value

A boolean value:

| Value   | Indication                                              |
| ------- | ------------------------------------------------------- |
| `true`  | The upper-bound value is not included in the key range. |
| `false` | The upper-bound value is included in the key range.     |

## Examples

The following example illustrates how you'd use a key range. Here we
declare `keyRangeValue = IDBKeyRange.upperBound("F", "W", true, true);` — a
range that includes everything between "F" and "W" but not including them — since both
the upper and lower bounds have been declared as open (`true`). We open a
transaction (using {{domxref("IDBTransaction")}}) and an object store, and open a Cursor
with {{domxref("IDBObjectStore.openCursor")}}, declaring `keyRangeValue` as
its optional key range value.

After declaring the key range, we log its `upperOpen` property value to the
console, which should appear as "true": the upper bound is open, so won't be included in
the range.

> **Note:** For a more complete example allowing you to experiment with
> key range, have a look at our [IDBKeyRange-example](https://github.com/mdn/dom-examples/blob/main/indexeddb-examples/idbkeyrange) repo ([view the example live too](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/).)

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.bound("F", "W", true, true);
  console.log(keyRangeValue.upperOpen);

  const transaction = db.transaction(["fThings"], "readonly");
  const objectStore = transaction.objectStore("fThings");
  objectStore.openCursor(keyRangeValue).onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const listItem = document.createElement("li");
      listItem.textContent = `${cursor.value.fThing}, ${cursor.value.fRating}`;
      list.appendChild(listItem);
      cursor.continue();
    } else {
      console.log("Entries all displayed.");
    }
  };
}
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
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/).)
