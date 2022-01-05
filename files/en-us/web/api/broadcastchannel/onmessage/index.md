---
title: BroadcastChannel.onmessage
slug: Web/API/BroadcastChannel/onmessage
tags:
  - API
  - Broadcast Channel API
  - BroadcastChannel
  - Event Handler
  - Experimental
  - HTML API
  - Property
  - Reference
browser-compat: api.BroadcastChannel.onmessage
---
{{APIRef("BroadCastChannel API")}}

The **`BroadcastChannel.onmessage`** event handler is a
property that specifies the function to execute when a {{event("message")}} event, of
type {{domxref("MessageEvent")}}, is received by this {{domxref("BroadcastChannel")}}.
Such an event is sent by the browser with a message broadcasted to the channel.

{{AvailableInWorkers}}

## Syntax

```js
channel.onmessage = function;
```

### Values

- `function` is the name of a user-defined function, without the
  `()` suffix or any parameters, or an anonymous function declaration,
  such as `function(event) {...}`. An event handler always has one single
  parameter, containing the event, here of type {{domxref("MessageEvent")}}.

## Example

```js
bc.onmessage = function(ev) { console.log(`message event received! '${ev.data}'`); };
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Another, more heavy weight, way of communicating between browser contexts:
  {{domxref("ServiceWorker")}}
