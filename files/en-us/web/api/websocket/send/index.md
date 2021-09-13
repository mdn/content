---
title: WebSocket.send()
slug: Web/API/WebSocket/send
tags:
  - API
  - Method
  - Reference
  - Web API
  - WebSocket
browser-compat: api.WebSocket.send
---
{{APIRef("Web Sockets API")}}

The **`WebSocket.send()`** method enqueues the specified data
to be transmitted to the server over the WebSocket connection, increasing the value of
`bufferedAmount` by the number of bytes needed to contain the data. If the
data can't be sent (for example, because it needs to be buffered but the buffer is
full), the socket is closed automatically.

## Syntax

```js
WebSocket.send("Hello server!");
```

### Parameters

- `data`

  - : The data to send to the server. It may be one of the following types:

    - {{domxref("USVString")}}
      - : A text string. The string is added to the buffer in UTF-8 format, and the value
        of `bufferedAmount` is increased by the number of bytes required to
        represent the UTF-8 string.
    - {{jsxref("ArrayBuffer")}}
      - : You can send the underlying binary data used by a typed array object; its binary
        data contents are queued in the buffer, increasing the value of
        `bufferedAmount` by the requisite number of bytes.
    - {{domxref("Blob")}}
      - : Specifying a `Blob` enqueues the blob's raw data to be transmitted in
        a binary frame. The value of `bufferedAmount` is increased by the byte
        size of that raw data.
    - {{domxref("ArrayBufferView")}}
      - : You can send any [JavaScript
        typed array](/en-US/docs/Web/JavaScript/Typed_arrays) object as a binary frame; its binary data contents are queued in
        the buffer, increasing the value of `bufferedAmount` by the requisite
        number of bytes.

### Exceptions thrown

- `INVALID_STATE_ERR`
  - : The connection is not currently `OPEN`.
- `SYNTAX_ERR`
  - : The data is a string that has unpaired surrogates.

> **Note:** Gecko's implementation of the `send()` method
> differs somewhat from the specification in {{Gecko("6.0")}}; Gecko returns a
> `boolean` indicating whether or not the connection is still open (and, by
> extension, that the data was successfully queued or transmitted); this is corrected in
> {{Gecko("8.0")}}.
>
> As of {{Gecko("11.0")}}, support for {{jsxref("ArrayBuffer")}} is implemented but not
> {{domxref("Blob")}} data types.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
