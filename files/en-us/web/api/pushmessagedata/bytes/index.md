---
title: "PushMessageData: bytes() method"
short-title: bytes()
slug: Web/API/PushMessageData/bytes
page-type: web-api-instance-method
browser-compat: api.PushMessageData.bytes
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

The **`bytes()`** method of the {{domxref("PushMessageData")}} interface extracts push message data as an {{jsxref("Uint8Array")}} object.

## Syntax

```js-nolint
bytes()
```

### Parameters

None.

### Return value

An {{jsxref("Uint8Array")}}.

### Exceptions

The returned {{jsxref("Uint8Array")}} is backed by an {{jsxref("ArrayBuffer")}} of bytes.
Exceptions thrown during creation of this backing buffer are re-thrown.

See [`TypedArray`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions).

## Examples

```js
self.addEventListener("push", (event) => {
  const buffer = event.data.Uint8Array();

  // do something with your typed array
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
