---
title: BroadcastChannel.close()
slug: Web/API/BroadcastChannel/close
tags:
  - API
  - Broadcast Channel API
  - BroadcastChannel
  - Experimental
  - HTML API
  - Method
  - Reference
browser-compat: api.BroadcastChannel.close
---
{{APIRef("BroadCastChannel API")}}

The **`BroadcastChannel.close()`** terminates the connection to
the underlying channel, allowing the object to be garbage collected. This is a necessary
step to perform as there is no other way for a browser to know that this channel is not
needed anymore.

{{AvailableInWorkers}}

## Syntax

```js
var str = channel.close();
```

## Example

```js
// Connect to a channel
var bc = new BroadcastChannel('test_channel');

// More operations (like postMessage, …)

// When done, disconnect from the channel
bc.close();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BroadcastChannel")}}, the interface it belongs to.
