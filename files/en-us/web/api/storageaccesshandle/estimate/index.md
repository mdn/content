---
title: "StorageAccessHandle: estimate() method"
short-title: estimate()
slug: Web/API/StorageAccessHandle/estimate
page-type: web-api-instance-method
browser-compat: api.StorageAccessHandle.estimate
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> See {{domxref("StorageManager.estimate()")}} to understand usage.

## Syntax

```js-nolint
estimate()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that fulfills with an unpartitioned {{domxref("StorageManager.estimate()", "StorageEstimate")}} object.

### Exceptions

- `SecurityError` {{domxref("DomException")}}
  - : Thrown if access was not granted.

See {{domxref("StorageManager.estimate()")}}

## Examples

```js
document.requestStorageAccess({ estimate: true }).then(
  (handle) => {
    console.log("estimate access granted");
    await handle.estimate();
  },
  () => {
    console.log("estimate access denied");
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
