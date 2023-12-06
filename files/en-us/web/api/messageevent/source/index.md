---
title: "MessageEvent: source property"
short-title: source
slug: Web/API/MessageEvent/source
page-type: web-api-instance-property
browser-compat: api.MessageEvent.source
---

{{APIRef("HTML DOM")}}

The **`source`** read-only property of the
{{domxref("MessageEvent")}} interface is a `MessageEventSource` (which can be
a {{glossary("WindowProxy")}}, {{domxref("MessagePort")}}, or
{{domxref("ServiceWorker")}} object) representing the message emitter.

## Value

a `MessageEventSource` (which can be a {{glossary("WindowProxy")}},
{{domxref("MessagePort")}}, or {{domxref("ServiceWorker")}} object) representing the
message emitter.

## Examples

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
  console.log(e.source);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ExtendableMessageEvent")}} — similar to this interface but used in
  interfaces that needs to give more flexibility to authors.
