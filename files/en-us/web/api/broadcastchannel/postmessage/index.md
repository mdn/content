---
title: "BroadcastChannel: postMessage() method"
short-title: postMessage()
slug: Web/API/BroadcastChannel/postMessage
page-type: web-api-instance-method
browser-compat: api.BroadcastChannel.postMessage
---

{{APIRef("BroadCastChannel API")}}

The **`BroadcastChannel.postMessage()`** sends a message,
which can be of any kind of {{jsxref("Object")}},
to each listener in any {{glossary("browsing context")}} with the same {{glossary("origin")}}.
The message is transmitted as a ['message'](/en-US/docs/Web/API/BroadcastChannel/message_event) event
targeted at each {{domxref("BroadcastChannel")}} bound to the channel.

{{AvailableInWorkers}}

## Syntax

```js-nolint
channel.postMessage(message)
```

### Parameters

- `message`
  - : Data to be sent to the other window. The data is serialized using the [structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
    This means you can pass a broad variety of data objects safely to the destination window without having to serialize them yourself.

### Return value

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BroadcastChannel")}}, the interface it belongs to.
