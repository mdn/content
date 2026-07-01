---
title: "StorageAccessHandle: localStorage property"
short-title: localStorage
slug: Web/API/StorageAccessHandle/localStorage
page-type: web-api-instance-property
browser-compat: api.StorageAccessHandle.localStorage
---

{{APIRef("Storage Access API")}}

The **`localStorage`** property of the {{domxref("StorageAccessHandle")}} interface returns an unpartitioned local {{domxref("Storage")}} object if access was granted, and throws a `SecurityError` {{DOMxRef("DOMException")}} otherwise.

## Value

A {{domxref("Storage")}} object.

## Examples

```js
document.requestStorageAccess({ localStorage: true }).then(
  (handle) => {
    console.log("localStorage access granted");
    handle.localStorage.setItem("foo", "bar");
  },
  () => {
    console.log("localStorage access denied");
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
