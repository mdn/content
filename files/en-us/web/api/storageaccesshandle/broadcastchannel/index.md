---
title: "StorageAccessHandle: BroadcastChannel() method"
short-title: BroadcastChannel()
slug: Web/API/StorageAccessHandle/BroadcastChannel
page-type: web-api-instance-method
browser-compat: api.StorageAccessHandle.BroadcastChannel
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> See {{domxref("BroadcastChannel.BroadcastChannel", "BroadcastChannel()")}} to understand usage.

## Syntax

```js-nolint
BroadcastChannel(channelName)
```

### Parameters

- `channelName`
  - : See {{domxref("BroadcastChannel.BroadcastChannel", "BroadcastChannel()")}}.

### Return value

An unpartitioned {{domxref("BroadcastChannel")}} object.

### Exceptions

- `SecurityError` {{domxref("DomException")}}
  - : Thrown if access was not granted.

See {{domxref("BroadcastChannel.BroadcastChannel", "BroadcastChannel()")}}

## Examples

```js
document.requestStorageAccess({ BroadcastChannel: true }).then(
  (handle) => {
    console.log("BroadcastChannel access granted");
    handle.BroadcastChannel(channel_name);
  },
  () => {
    console.log("BroadcastChannel access denied");
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
