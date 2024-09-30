---
title: "StorageAccessHandle: indexedDB property"
short-title: indexedDB
slug: Web/API/StorageAccessHandle/indexedDB
page-type: web-api-instance-property
browser-compat: api.StorageAccessHandle.indexedDB
---

{{APIRef("Storage Access API")}}

The **`indexedDB`** property of the {{domxref("StorageAccessHandle")}} interface returns an unpartitioned {{domxref("IDBFactory")}} object if access was granted, and throws a `SecurityError` {{DOMxRef("DOMException")}} otherwise.

## Value

A {{domxref("IDBFactory")}} object.

## Examples

```js
document.requestStorageAccess({ indexedDB: true }).then(
  (handle) => {
    console.log("indexedDB access granted");
    await handle.indexedDB.deleteDatabase("foo");
  },
  () => {
    console.log("indexedDB access denied");
  },
);
```

> [!NOTE]
> See [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using) for a more complete example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.requestStorageAccess()")}}
- [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using)
