---
title: PushMessageData
slug: Web/API/PushMessageData
page-type: web-api-interface
browser-compat: api.PushMessageData
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

The **`PushMessageData`** interface of the [Push API](/en-US/docs/Web/API/Push_API) provides methods which let you retrieve the push data sent by a server in various formats.

Unlike the similar methods in the [Fetch API](/en-US/docs/Web/API/Fetch_API), which only allow the method to be invoked once, these methods can be called multiple times.

Messages received through the Push API are sent encrypted by push services and then automatically decrypted by browsers before they are made accessible through the methods of the `PushMessageData` interface.

## Instance properties

None.

## Instance methods

- {{domxref("PushMessageData.arrayBuffer()")}}
  - : Extracts the data as an {{jsxref("ArrayBuffer")}} object.
- {{domxref("PushMessageData.blob()")}}
  - : Extracts the data as a {{domxref("Blob")}} object.
- {{domxref("PushMessageData.bytes()")}}
  - : Extracts the data as a {{jsxref("Uint8Array")}} object.
- {{domxref("PushMessageData.json()")}}
  - : Extracts the data as a [JSON](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) object.
- {{domxref("PushMessageData.text()")}}
  - : Extracts the data as a plain text string.

## Examples

```js
self.addEventListener("push", (event) => {
  const obj = event.data.json();

  if (obj.action === "subscribe" || obj.action === "unsubscribe") {
    fireNotification(obj, event);
    port.postMessage(obj);
  } else if (obj.action === "init" || obj.action === "chatMsg") {
    port.postMessage(obj);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
