---
title: BroadcastChannel()
slug: Web/API/BroadcastChannel/BroadcastChannel
tags:
  - API
  - Broadcast Channel API
  - BroadcastChannel
  - Constructor
  - Experimental
  - HTML API
  - Reference
browser-compat: api.BroadcastChannel.BroadcastChannel
---
{{APIRef("BroadCastChannel API")}}

The **`BroadcastChannel()`** constructor creates a new
{{domxref("BroadcastChannel")}} and connects it to the underlying channel.

{{AvailableInWorkers}}

## Syntax

```js
 channel = new BroadcastChannel(channelName);
```

### Values

- _channelName_
  - : Is a {{domxref("DOMString")}} representing the name of the channel; there is one
    single channel with this name for all {{glossary("browsing context", "browsing
    contexts")}} with the same {{glossary("origin")}}.

## Example

```js
// create a new channel listening to the "internal_notification" channel.

var bc = new BroadcastChannel('internal_notification');
bc.postMessage('New listening connected!');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BroadcastChannel")}}, the interface it belongs to.
