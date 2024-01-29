---
title: "WebSocket: terminate() method"
short-title: terminate()
slug: Web/API/WebSocket/terminate
page-type: web-api-instance-method
browser-compat: api.WebSocket.terminate
---

{{APIRef("Web Sockets API")}}

The **`WebSocket.terminate()`** method closes the
{{domxref("WebSocket")}} connection or connection attempt, if any. If the connection is
already `CLOSED`, this method does nothing.

> **Note:** The process of closing the connection begins with a [closing handshake](https://www.rfc-editor.org/rfc/rfc6455.html#section-1.4), and the `close()` method does not discard previously-sent messages before starting that closing handshake; even if the user agent is still busy sending those messages, the handshake will only start after the messages are sent.

## Syntax

```js-nolint
terminate()
```

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (the WebSocket Protocol specification)
