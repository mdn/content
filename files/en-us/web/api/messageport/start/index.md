---
title: "MessagePort: start() method"
short-title: start()
slug: Web/API/MessagePort/start
page-type: web-api-instance-method
browser-compat: api.MessagePort.start
---

{{APIRef("HTML DOM")}}

The **`start()`** method of the {{domxref("MessagePort")}}
interface starts the sending of messages queued on the port. This method is only needed
when using {{domxref("EventTarget.addEventListener")}}; it is implied when using
{{domxref("MessagePort.message_event", "onmessage")}}.

{{AvailableInWorkers}}

## Syntax

```js-nolint
start()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

In the following code block, you can see a `handleMessage` handler function,
run when a message is sent back to this document using `onmessage`:

```js
channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}
```

Another option would be to do this using {{domxref("EventTarget.addEventListener")}},
however, when this method is used, you need to explicitly call `start()` to
begin the flow of messages to this document:

```js
channel.port1.addEventListener("message", handleMessage, false);
function handleMessage(e) {
  para.innerHTML = e.data;
  textInput.value = "";
}

channel.port1.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using channel messaging](/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
