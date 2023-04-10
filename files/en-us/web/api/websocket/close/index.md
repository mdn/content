---
title: "WebSocket: close() method"
short-title: close()
slug: Web/API/WebSocket/close
page-type: web-api-instance-method
browser-compat: api.WebSocket.close
---

{{APIRef("Web Sockets API")}}

The **`WebSocket.close()`** method closes the
{{domxref("WebSocket")}} connection or connection attempt, if any. If the connection is
already `CLOSED`, this method does nothing.

> **Note:** The process of closing the connection begins with a [closing handshake](https://www.rfc-editor.org/rfc/rfc6455.html#section-1.4), and the `close()` method does not discard previously-sent messages before starting that closing handshake; even if the user agent is still busy sending those messages, the handshake will only start after the messages are sent.

## Syntax

```js-nolint
close()
close(code)
close(code, reason)
```

### Parameters

- `code` {{optional_inline}}

  - : An integer [WebSocket connection close code](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5) value indicating a reason for closure:
    - If unspecified, a close code for the connection is automatically set: to `1000` for a normal closure, or otherwise to [another standard value in the range `1001`-`1015`](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.4.1) that indicates the actual reason the connection was closed.
    - If specified, the value of this `code` parameter overrides the automatic setting of the close code for the connection, and instead sets a custom code.
      The value must be an integer: either `1000`, or else a custom code of your choosing in the range `3000`-`4999`. If you specify a `code` value, you should also specify a [`reason`](#reason) value.

- `reason` {{optional_inline}}

  - : A string providing a custom [WebSocket connection close reason](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.6) (a concise human-readable prose explanation for the closure). The value must be no longer than 123 bytes (encoded in UTF-8).

    > **Note:** Because [UTF-8 uses two to four bytes](/en-US/docs/Glossary/UTF-8) to encode any non-[ASCII](/en-US/docs/Glossary/ASCII) characters, a 123-character `reason` value containing non-ASCII characters would exceed the 123-byte limit.

    If you specify a `reason` value, you should also specify a [`code`](#code) value.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if [`code`](#code) is neither an integer equal to `1000` nor an integer in the range `3000` – `4999`.
- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if the UTF-8-encoded [`reason`](#reason) value is longer than 123 bytes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (the WebSocket Protocol specification)
