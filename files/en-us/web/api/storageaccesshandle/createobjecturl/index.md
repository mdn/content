---
title: "StorageAccessHandle: createObjectURL() method"
short-title: createObjectURL()
slug: Web/API/StorageAccessHandle/createObjectURL
page-type: web-api-instance-method
browser-compat: api.StorageAccessHandle.createObjectURL
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> See {{domxref("URL.createObjectURL_static", "createObjectURL()")}} to understand usage.

## Syntax

```js-nolint
createObjectURL(object)
```

### Parameters

- `object`
  - : See {{domxref("URL.createObjectURL_static", "createObjectURL()")}}.

### Return value

A string containing an unpartitioned object URL that can be used to reference the contents of the specified source `object`.

### Exceptions

- `SecurityError` {{domxref("DomException")}}
  - : Thrown if access was not granted.

See {{domxref("URL.createObjectURL_static", "createObjectURL()")}}

## Examples

```js
document.requestStorageAccess({ createObjectURL: true }).then(
  (handle) => {
    console.log("createObjectURL access granted");
    handle.createObjectURL(new Blob(["foo"]));
  },
  () => {
    console.log("createObjectURL access denied");
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
