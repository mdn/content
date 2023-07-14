---
title: "MessageEvent: data property"
short-title: data
slug: Web/API/MessageEvent/data
page-type: web-api-instance-property
browser-compat: api.MessageEvent.data
---

{{APIRef("HTML DOM")}}

The **`data`** read-only property of the
{{domxref("MessageEvent")}} interface represents the data sent by the message emitter.

## Value

The data sent by the message emitter; this can be any data type.

If the data is sent by a {{domxref("WebSocket")}} connector, the type of this property depends on the type of the WebSocket message and the value of {{domxref("WebSocket.binaryType")}}.

- If the message type is "text", then this field is a string.
- If the message type is "binary" type, then the type of this property can be inferred from the `binaryType` of this socket:
  - {{jsxref("ArrayBuffer")}} if `binaryType` is `"arraybuffer"`,
  - {{domxref("Blob")}} if `binaryType` is `"blob"`.

## Examples

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ExtendableMessageEvent")}} — similar to this interface but used in
  interfaces that needs to give more flexibility to authors.
