---
title: "WebTransportError: streamErrorCode property"
short-title: streamErrorCode
slug: Web/API/WebTransportError/streamErrorCode
page-type: web-api-instance-property
browser-compat: api.WebTransportError.streamErrorCode
---

{{APIRef("WebTransport API")}}

The **`streamErrorCode`** read-only property of the {{domxref("WebTransportError")}} interface returns a number in the range 0-255 indicating the application protocol error code for this error, or `null` if one is not available.

{{AvailableInWorkers}}

## Value

A number, or `null`.

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

- [Using WebTransport](https://web.dev/webtransport/)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
