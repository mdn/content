---
title: MessageEvent.source
slug: Web/API/MessageEvent/source
tags:
  - API
  - DOM
  - MessageEvent
  - Property
  - Reference
  - messaging
  - source
browser-compat: api.MessageEvent.source
---
{{APIRef("HTML DOM")}}

The **`source`** read-only property of the
{{domxref("MessageEvent")}} interface is a `MessageEventSource` (which can be
a {{domxref("WindowProxy")}}, {{domxref("MessagePort")}}, or
{{domxref("ServiceWorker")}} object) representing the message emitter.

## Syntax

```js
let mySource = messageEvent.source;
```

### Value

a `MessageEventSource` (which can be a {{domxref("WindowProxy")}},
{{domxref("MessagePort")}}, or {{domxref("ServiceWorker")}} object) representing the
message emitter.

## Example

```js
myWorker.onmessage = function(e) {
  result.textContent = e.data;
  console.log('Message received from worker');
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
