---
title: "IDBKeyRange: lower property"
short-title: lower
slug: Web/API/IDBKeyRange/lower
page-type: web-api-instance-property
browser-compat: api.IDBKeyRange.lower
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

The **`lower`** read-only property of the
{{domxref("IDBKeyRange")}} interface returns the lower bound of the key range.

## Value

The lower bound of the key range (can be any
type.)

## Examples

The following example illustrates how you'd use a key range. Here we
declare `keyRangeValue = IDBKeyRange.upperBound("F", "W", true, true);` — a
range that includes everything between "F" and "W" but not including them — since both
the upper and lower bounds have been declared as open (`true`). We open a
transaction (using {{domxref("IDBTransaction")}}) and an object store, and open a Cursor
with {{domxref("IDBObjectStore.openCursor")}}, declaring `keyRangeValue` as
its optional key range value.

After declaring the key range, we log its `lower` property value to the
console, which should appear as "F".

> **Note:** For a more complete example allowing you to experiment with
> key range, have a look at our [IDBKeyRange-example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) repo.
> (View the example [live](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/) too.

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.bound("F", "W", true, true);
  console.log(keyRangeValue.lower);

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
