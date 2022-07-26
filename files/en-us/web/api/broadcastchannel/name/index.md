---
title: BroadcastChannel.name
slug: Web/API/BroadcastChannel/name
page-type: web-api-instance-property
tags:
  - Broadcast Channel API
  - Property
  - Read-only
  - Reference
browser-compat: api.BroadcastChannel.name
---
{{APIRef("BroadCastChannel API")}}

The read-only **`BroadcastChannel.name`** property returns a string, which uniquely identifies the given channel with its name. This name is passed to the {{domxref("BroadcastChannel.BroadCastChannel", "BroadcastChannel()")}} constructor at creation time and is therefore read-only.

{{AvailableInWorkers}}

## Values

A string.

## Examples

```js
// Connect to a channel
const bc = new BroadcastChannel('test_channel');

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
