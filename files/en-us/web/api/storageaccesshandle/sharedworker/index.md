---
title: "StorageAccessHandle: SharedWorker() method"
short-title: SharedWorker()
slug: Web/API/StorageAccessHandle/SharedWorker
page-type: web-api-instance-method
browser-compat: api.StorageAccessHandle.SharedWorker
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> See {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} to understand usage.

## Syntax

```js-nolint
SharedWorker(aURL)
SharedWorker(aURL, name)
SharedWorker(aURL, options)
```

### Parameters

- `aURL`
  - : See {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}.
- `name` {{optional_inline}}
  - : See {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}.
- `options` {{optional_inline}}
  - : See {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}.

> **Note:** `options.sameSiteCookies` only supports the value "none", which is the default.

### Return value

An unpartitioned {{domxref("SharedWorker")}} object.

### Exceptions

- `SecurityError` {{domxref("DomException")}}
  - : Thrown if access was not granted.

See {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}

## Examples

```js
document.requestStorageAccess({ SharedWorker: true }).then(
  (handle) => {
    console.log("SharedWorker access granted");
    handle.SharedWorker(shared_worker_url);
  },
  () => {
    console.log("SharedWorker access denied");
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
