---
title: MessageEvent.lastEventId
slug: Web/API/MessageEvent/lastEventId
tags:
  - API
  - DOM
  - MessageEvent
  - Property
  - Reference
  - lastEventID
  - messaging
browser-compat: api.MessageEvent.lastEventId
---
{{APIRef("HTML DOM")}}

The **`lastEventId`** read-only property of the
{{domxref("MessageEvent")}} interface is a {{domxref("DOMString")}} representing a
unique ID for the event.

## Syntax

```js
var myId = messageEvent.lastEventId;
```

### Value

A {{domxref("DOMString")}} representing the ID.

## Example

```js
myWorker.onmessage = function(e) {
  result.textContent = e.data;
  console.log('Message received from worker');
  console.log(e.lastEventId);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ExtendableMessageEvent")}} — similar to this interface but used in
  interfaces that needs to give more flexibility to authors.
