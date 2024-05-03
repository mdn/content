---
title: "StorageAccessHandle: revokeObjectURL() property"
short-title: revokeObjectURL()
slug: Web/API/StorageAccessHandle/revokeObjectURL
page-type: web-api-instance-method
browser-compat: api.StorageAccessHandle.revokeObjectURL
---

{{APIRef("Storage Access API")}}

> **Note:** See {{domxref("URL.revokeObjectURL_static", "revokeObjectURL()")}} to understand usage.

## Syntax

```js-nolint
revokeObjectURL(objectURL)
```

### Parameters

- `objectURL`
  - : A string representing an object URL that was previously created by calling {{domxref("StorageAccessHandle.createObjectURL()")}}.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `SecurityError` {{domxref("DomException")}}
  - : Thrown if access was not granted.

## Examples

```js
document.requestStorageAccess({ revokeObjectURL: true }).then(
  (handle) => {
    console.log("revokeObjectURL access granted");
    handle.revokeObjectURL(blob_url);
  },
  () => {
    console.log("revokeObjectURL access denied");
  },
);
```

> **Note:** See [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using) for a more complete example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.requestStorageAccess()")}}
- [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using)
