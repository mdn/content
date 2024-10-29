---
title: "BroadcastChannel: close() method"
short-title: close()
slug: Web/API/BroadcastChannel/close
page-type: web-api-instance-method
browser-compat: api.BroadcastChannel.close
---

{{APIRef("BroadCastChannel API")}} {{AvailableInWorkers}}

The **`close()`** method of the {{domxref("BroadcastChannel")}} interface terminates the connection to
the underlying channel, allowing the object to be garbage collected.
This is a necessary step to perform
as there is no other way for a browser to know
that this channel is not needed anymore.

## Syntax

```js-nolint
close()
```

## Examples

```js
// Connect to a channel
const bc = new BroadcastChannel("test_channel");

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
