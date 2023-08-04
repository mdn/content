---
title: "WebSocket: send() method"
short-title: send()
slug: Web/API/WebSocket/send
page-type: web-api-instance-method
browser-compat: api.WebSocket.send
---

{{APIRef("Web Sockets API")}}

The **`WebSocket.send()`** method enqueues the specified data
to be transmitted to the server over the WebSocket connection, increasing the value of
`bufferedAmount` by the number of bytes needed to contain the data. If the
data can't be sent (for example, because it needs to be buffered but the buffer is
full), the socket is closed automatically.
The browser will throw an exception if you call `send()` when the connection is in the `CONNECTING` state. If you call `send()` when the connection is in the `CLOSING` or `CLOSED` states, the browser will silently discard the data.

## Syntax

```js-nolint
send(data)
```

### Parameters

- `data`

  - : The data to send to the server. It may be one of the following types:

    - `string`
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
    - {{jsxref("TypedArray")}} or a {{jsxref("DataView")}}
      - : You can send any [JavaScript typed array](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) object as a binary frame;
        its binary data contents are queued in the buffer,
        increasing the value of `bufferedAmount` by the requisite number of bytes.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if {{domxref("WebSocket/readyState", "WebSocket.readyState")}} is `CONNECTING`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
