---
title: WebTransportError.source
slug: Web/API/WebTransportError/source
page-type: web-api-instance-property
tags:
  - API
  - Experimental
  - Property
  - Reference
  - source
  - WebTransportError
  - WebTransport API
browser-compat: api.WebTransportError.source
---

{{APIRef("WebTransport API")}}{{seecompattable}}{{SecureContext_Header}}

The **`source`** read-only property of the {{domxref("WebTransportError")}} interface returns an enumerated value indicating the source of the error.

{{AvailableInWorkers}}

## Value

An enumerated value; can be either `stream` or `session`.

## Examples

```js
// some kind of WebTransport error
console.log(error.source)
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
