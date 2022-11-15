---
title: WebTransportError
slug: Web/API/WebTransportError
page-type: web-api-interface
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - WebTransport API
  - WebTransportError
browser-compat: api.WebTransportError
---

{{APIRef("WebTransport API")}}{{seecompattable}}{{SecureContext_Header}}

The **`WebTransportError`** interface of the {{domxref("WebTransport API", "WebTransport API", "", "nocode")}} represents an error related to the API, which can arise from server errors, network connection problems, or client-initiated abort operations (for example, arising from a {{domxref("WritableStream.abort()")}} call).

{{InheritanceDiagram}}

{{AvailableInWorkers}}

## Constructor

- {{domxref("WebTransportError.WebTransportError", "WebTransportError()")}}
  - : Creates a new `WebTransportError` object instance.

## Instance properties

_Inherits properties from its parent, {{DOMxRef("DOMException")}}._

- {{domxref("WebTransportError.source", "source")}} {{ReadOnlyInline}}
  - : Returns an enumerated value indicating the source of the error—can be either `stream` or `session`.
- {{domxref("WebTransportError.streamErrorCode", "streamErrorCode")}} {{ReadOnlyInline}}
  - : Returns a number in the range 0-255 indicating the application protocol error code for this error, or `null` if one is not available.

## Examples

```js
const url = 'https://example.com:4999/wt';
// Initialize transport connection
const transport = new WebTransport(url);

async function initTransport(transport) {
  // Respond to connection closing
  try {
    await transport.closed;
    console.log(`The HTTP/3 connection to ${url} closed gracefully.`);
  } catch(error) {
    console.error(`The HTTP/3 connection to ${url} closed due to ${error}.`);
  }

  // The connection can be used once ready fulfills
  await transport.ready;

  // ...
}
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
