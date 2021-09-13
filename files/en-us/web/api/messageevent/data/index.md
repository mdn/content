---
title: MessageEvent.data
slug: Web/API/MessageEvent/data
tags:
  - API
  - DOM
  - MessageEvent
  - Property
  - Reference
  - data
  - messaging
browser-compat: api.MessageEvent.data
---
{{APIRef("HTML DOM")}}

The **`data`** read-only property of the
{{domxref("MessageEvent")}} interface represents the data sent by the message emitter.

## Syntax

```js
var data = messageEvent.data;
```

### Value

The data sent by the message emitter; this can be any data type.

## Example

```js
myWorker.onmessage = function(e) {
  result.textContent = e.data;
  console.log('Message received from worker');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ExtendableMessageEvent")}} — similar to this interface but used in
  interfaces that needs to give more flexibility to authors.
