---
title: BroadcastChannel.name
slug: Web/API/BroadcastChannel/name
tags:
  - Broadcast Channel API
  - BroadcastChannel
  - Experimental
  - HTML API
  - Property
  - Read-only
  - Reference
browser-compat: api.BroadcastChannel.name
---
{{APIRef("BroadCastChannel API")}}

The read-only **`BroadcastChannel.name`** property returns a
{{domxref("DOMString")}}, which uniquely identifies the given channel with its name.
This name is passed to the {{domxref("BroadcastChannel.BroadCastChannel",
  "BroadcastChannel()")}} constructor at creation time and is therefore read-only.

{{AvailableInWorkers}}

## Syntax

```js
var str = channel.name;
```

## Examples

```js
// Connect to a channel
var bc = new BroadcastChannel('test_channel');

// More operations (like postMessage, …)

// Log the channel name to the console
console.log(bc.name); // "test_channel"

// When done, disconnect from the channel
bc.close();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BroadcastChannel")}}, the interface it belongs to.
