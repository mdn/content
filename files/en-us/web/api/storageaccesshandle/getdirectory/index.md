---
title: "StorageAccessHandle: getDirectory() method"
short-title: getDirectory()
slug: Web/API/StorageAccessHandle/getDirectory
page-type: web-api-instance-method
browser-compat: api.StorageAccessHandle.getDirectory
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> See {{domxref("StorageManager.getDirectory()")}} to understand usage.

## Syntax

```js-nolint
getDirectory()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that fulfills with an unpartitioned {{domxref("FileSystemDirectoryHandle")}} object.

### Exceptions

- `SecurityError` {{domxref("DomException")}}
  - : Thrown if access was not granted.

See {{domxref("StorageManager.getDirectory()")}}

## Examples

```js
document.requestStorageAccess({ getDirectory: true }).then(
  (handle) => {
    console.log("getDirectory access granted");
    await handle.getDirectory();
  },
  () => {
    console.log("getDirectory access denied");
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
