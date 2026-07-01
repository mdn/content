---
title: "StorageAccessHandle: sessionStorage property"
short-title: sessionStorage
slug: Web/API/StorageAccessHandle/sessionStorage
page-type: web-api-instance-property
browser-compat: api.StorageAccessHandle.sessionStorage
---

{{APIRef("Storage Access API")}}

The **`sessionStorage`** property of the {{domxref("StorageAccessHandle")}} interface returns an unpartitioned session {{domxref("Storage")}} object if access was granted, and throws a `SecurityError` {{DOMxRef("DOMException")}} otherwise.

## Value

A {{domxref("Storage")}} object.

## Examples

```js
document.requestStorageAccess({ sessionStorage: true }).then(
  (handle) => {
    console.log("sessionStorage access granted");
    handle.sessionStorage.setItem("foo", "bar");
  },
  () => {
    console.log("sessionStorage access denied");
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
