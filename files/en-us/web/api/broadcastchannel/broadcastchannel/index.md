---
title: "BroadcastChannel: BroadcastChannel() constructor"
short-title: BroadcastChannel()
slug: Web/API/BroadcastChannel/BroadcastChannel
page-type: web-api-constructor
browser-compat: api.BroadcastChannel.BroadcastChannel
---

{{APIRef("BroadCastChannel API")}}

The **`BroadcastChannel()`** constructor creates a new
{{domxref("BroadcastChannel")}} and connects it to the underlying channel.

{{AvailableInWorkers}}

## Syntax

```js-nolint
new BroadcastChannel(channelName)
```

### Parameters

- `channelName`
  - : A string representing the name of the channel; there is one
    single channel with this name for all {{glossary("browsing context", "browsing
    contexts")}} with the same {{glossary("origin")}}.

## Examples

```js
// create a new channel listening to the "internal_notification" channel.

const bc = new BroadcastChannel("internal_notification");
bc.postMessage("New listening connected!");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BroadcastChannel")}}, the interface it belongs to.
