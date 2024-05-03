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
  - : Returns a {{domxref("Storage")}} object used to access unpartitioned sessionStorage if access was granted.
- {{domxref("StorageAccessHandle.localStorage")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("Storage")}} object used to access unpartitioned localStorage if access was granted.
- {{domxref("StorageAccessHandle.indexedDB")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("IDBFactory")}} object used to access unpartitioned indexedDB if access was granted.
- {{domxref("StorageAccessHandle.locks")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("LockManager")}} object used to access unpartitioned locks if access was granted.
- {{domxref("StorageAccessHandle.caches")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("CacheStorage")}} object used to access unpartitioned caches if access was granted.

## Instance methods

- {{domxref("StorageAccessHandle.getDirectory()")}}
  - : Returns a {{jsxref("Promise")}} that fufills with a {{domxref("FileSystemDirectoryHandle")}} object used to access unpartitioned getDirectory if access was granted, and rejects otherwise.
- {{domxref("StorageAccessHandle.estimate()")}}
  - : Returns a {{jsxref("Promise")}} that fufills with a {{domxref("StorageEstimate")}} object used to access unpartitioned estimate if access was granted, and rejects otherwise.
- {{domxref("StorageAccessHandle.createObjectURL()")}}
  - : Returns the unpartitioned blob storage url created if access was granted, and throws otherwise.
- {{domxref("StorageAccessHandle.revokeObjectURL()")}}
  - : Removes the unpartitioned blob storage url if access was granted, and throws otherwise.
- {{domxref("StorageAccessHandle.BroadcastChannel()")}}
  - : Returns the unpartitioned {{domxref("BroadcastChannel")}} created if access was granted, and throws otherwise.
- {{domxref("StorageAccessHandle.SharedWorker()")}}
  - : Returns the unpartitioned {{domxref("SharedWorker")}} created if access was granted, and throws otherwise.

## Example

```js
document.requestStorageAccess({localStorage: true}).then(
  (handle) => {
    console.log("localStorage access granted");
    handle.localStorage.setItem("foo", "bar");
  },
  () => {
    console.log("localStorage access denied");
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
