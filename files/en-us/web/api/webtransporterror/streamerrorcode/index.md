---
title: WebTransportError.streamErrorCode
slug: Web/API/WebTransportError/streamErrorCode
page-type: web-api-instance-property
tags:
  - API
  - Experimental
  - Property
  - Reference
  - streamErrorCode
  - WebTransportError
  - WebTransport API
browser-compat: api.WebTransportError.streamErrorCode
---

{{APIRef("WebTransport API")}}{{seecompattable}}{{SecureContext_Header}}

The **`streamErrorCode`** read-only property of the {{domxref("WebTransportError")}} interface returns a number in the range 0-255 indicating the application protocol error code for this error, or `null` if one is not available.

{{AvailableInWorkers}}

## Value

A number, or `null`.

## Examples

```js
// some kind of WebTransport error
console.log(error.streamErrorCode)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebTransport](https://web.dev/webtransport/)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
