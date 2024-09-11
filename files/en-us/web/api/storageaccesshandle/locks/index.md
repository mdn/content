---
title: "StorageAccessHandle: locks property"
short-title: locks
slug: Web/API/StorageAccessHandle/locks
page-type: web-api-instance-property
browser-compat: api.StorageAccessHandle.locks
---

{{APIRef("Storage Access API")}}

The **`locks`** property of the {{domxref("StorageAccessHandle")}} interface returns an unpartitioned session {{domxref("LockManager")}} object if access was granted, and throws a `SecurityError` {{DOMxRef("DOMException")}} otherwise.

## Value

A {{domxref("LockManager")}} object.

## Examples

```js
document.requestStorageAccess({ locks: true }).then(
  (handle) => {
    console.log("locks access granted");
    await handle.locks.request('foo', async lock => {
        return "ok";
    });
  },
  () => {
    console.log("locks access denied");
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
