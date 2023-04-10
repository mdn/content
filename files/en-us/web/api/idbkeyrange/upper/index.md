---
title: "IDBKeyRange: upper property"
short-title: upper
slug: Web/API/IDBKeyRange/upper
page-type: web-api-instance-property
browser-compat: api.IDBKeyRange.upper
---

{{ APIRef("IndexedDB") }}

The **`upper`** read-only property of the
{{domxref("IDBKeyRange")}} interface returns the upper bound of the key range.

{{AvailableInWorkers}}

## Value

The upper bound of the key range (can be any type.)

## Examples

The following example illustrates how you'd use a key range. Here we
declare `keyRangeValue = IDBKeyRange.upperBound("F", "W", true, true);` — a
range that includes everything between "F" and "W" but not including them — since both
the upper and lower bounds have been declared as open (`true`). We open a
transaction (using {{domxref("IDBTransaction")}}) and an object store, and open a Cursor
with {{domxref("IDBObjectStore.openCursor")}}, declaring `keyRangeValue` as
its optional key range value.

After declaring the key range, we log its `upper` property value to the
console, which should appear as "W".

> **Note:** For a more complete example allowing you to experiment with
> key range, have a look at our [IDBKeyRange-example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) repo
> ([view the example live too](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/).)

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.bound("F", "W", true, true);
  console.log(keyRangeValue.upper);

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
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([View the example live](https://mdn.github.io/dom-examples/to-do-notifications/)).
