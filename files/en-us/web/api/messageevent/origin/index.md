---
title: MessageEvent.origin
slug: Web/API/MessageEvent/origin
tags:
  - API
  - DOM
  - MessageEvent
  - Property
  - Reference
  - messaging
  - origin
browser-compat: api.MessageEvent.origin
---
{{APIRef("HTML DOM")}}

The **`origin`** read-only property of the
{{domxref("MessageEvent")}} interface is a {{domxref("USVString")}} representing the
origin of the message emitter.

## Syntax

```js
var origin = messageEvent.origin;
```

### Value

A {{domxref("USVString")}} representing the origin.

## Example

```js
myWorker.onmessage = function(e) {
  result.textContent = e.data;
  console.log('Message received from worker');
  console.log(e.origin);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ExtendableMessageEvent")}} — similar to this interface but used in
  interfaces that needs to give more flexibility to authors.
