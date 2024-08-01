---
title: StorageAccessHandle
slug: Web/API/StorageAccessHandle
page-type: web-api-interface
browser-compat: api.StorageAccessHandle
---

{{APIRef("Storage Access API")}}

The **`StorageAccessHandle`** interface represents access to [unpartitioned state](/en-US/docs/Web/Privacy/State_Partitioning#state_partitioning) granted by a call to {{domxref("Document.requestStorageAccess()")}}.

## Instance properties

- {{domxref("StorageAccessHandle.sessionStorage")}} {{ReadOnlyInline}}
  - : Returns an unpartitioned session {{domxref("Storage")}} object if access was granted.
- {{domxref("StorageAccessHandle.localStorage")}} {{ReadOnlyInline}}
  - : Returns an unpartitioned local {{domxref("Storage")}} object if access was granted.
- {{domxref("StorageAccessHandle.indexedDB")}} {{ReadOnlyInline}}
  - : Returns an unpartitioned {{domxref("IDBFactory")}} object if access was granted.
- {{domxref("StorageAccessHandle.locks")}} {{ReadOnlyInline}}
  - : Returns an unpartitioned {{domxref("LockManager")}} object if access was granted.
- {{domxref("StorageAccessHandle.caches")}} {{ReadOnlyInline}}
  - : Returns an unpartitioned {{domxref("CacheStorage")}} object if access was granted.

## Instance methods

- {{domxref("StorageAccessHandle.getDirectory()")}}
  - : Returns a {{jsxref("Promise")}} that fulfills with an unpartitioned {{domxref("FileSystemDirectoryHandle")}} object if access was granted, and rejects otherwise.
- {{domxref("StorageAccessHandle.estimate()")}}
  - : Returns a {{jsxref("Promise")}} that fulfills with an unpartitioned {{domxref("StorageManager.estimate()", "StorageEstimate")}} object if access was granted, and rejects otherwise.
- {{domxref("StorageAccessHandle.createObjectURL()")}}
  - : Returns a string representing the unpartitioned blob storage url created if access was granted, and throws otherwise.
- {{domxref("StorageAccessHandle.revokeObjectURL()")}}
  - : Revokes the unpartitioned blob storage url passed in if access was granted, and throws otherwise.
- {{domxref("StorageAccessHandle.BroadcastChannel()")}}
  - : Returns the unpartitioned {{domxref("BroadcastChannel")}} created if access was granted, and throws otherwise.
- {{domxref("StorageAccessHandle.SharedWorker()")}}
  - : Returns the unpartitioned {{domxref("SharedWorker")}} created if access was granted, and throws otherwise.

## Example

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
