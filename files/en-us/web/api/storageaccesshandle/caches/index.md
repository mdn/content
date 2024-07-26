---
title: "StorageAccessHandle: caches property"
short-title: caches
slug: Web/API/StorageAccessHandle/caches
page-type: web-api-instance-property
browser-compat: api.StorageAccessHandle.caches
---

{{APIRef("Storage Access API")}}

The **`caches`** property of the {{domxref("StorageAccessHandle")}} interface returns an unpartitioned {{domxref("CacheStorage")}} object if access was granted, and throws a `SecurityError` {{DOMxRef("DOMException")}} otherwise.

## Value

A {{domxref("CacheStorage")}} object.

## Examples

```js
document.requestStorageAccess({ caches: true }).then(
  (handle) => {
    console.log("caches access granted");
    const cache = await handle.caches.open("foo");
    await cache.add("/");
  },
  () => {
    console.log("caches access denied");
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
