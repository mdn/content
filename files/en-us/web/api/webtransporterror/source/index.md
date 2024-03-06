---
title: "WebTransportError: source property"
short-title: source
slug: Web/API/WebTransportError/source
page-type: web-api-instance-property
browser-compat: api.WebTransportError.source
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`source`** read-only property of the {{domxref("WebTransportError")}} interface returns an enumerated value indicating the source of the error.

## Value

An enumerated value; can be either `stream` or `session`.

## Examples

```js
const url = "notaurl";

async function initTransport(url) {
  try {
    // Initialize transport connection
    const transport = new WebTransport(url);

    // The connection can be used once ready fulfills
    await transport.ready;

    // ...
  } catch (error) {
    const msg = `Transport initialization failed.
                 Reason: ${error.message}.
                 Source: ${error.source}.
                 Error code: ${error.streamErrorCode}.`;
    console.log(msg);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
