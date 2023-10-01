---
title: "MessagePort: close() method"
short-title: close()
slug: Web/API/MessagePort/close
page-type: web-api-instance-method
browser-compat: api.MessagePort.close
---

{{APIRef("HTML DOM")}}

The **`close()`** method of the {{domxref("MessagePort")}}
interface disconnects the port, so it is no longer active. This stops the flow of
messages to that port.

{{AvailableInWorkers}}

## Syntax

```js-nolint
close()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

In the following code block, you can see a `handleMessage` handler function,
run when a message is sent back to this document using
{{domxref("EventTarget.addEventListener")}}.

```js
channel.port1.addEventListener("message", handleMessage, false);
function handleMessage(e) {
  para.innerHTML = e.data;
  textInput.value = "";
}

channel.port1.start();
```

You could stop messages being sent at any time using

```js
channel.port1.close();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using channel messaging](/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
