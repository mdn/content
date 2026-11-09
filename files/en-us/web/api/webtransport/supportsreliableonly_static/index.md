---
title: "WebTransport: supportsReliableOnly static property"
short-title: supportsReliableOnly
slug: Web/API/WebTransport/supportsReliableOnly_static
page-type: web-api-static-property
browser-compat: api.WebTransport.supportsReliableOnly_static
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`supportsReliableOnly`** static read-only property of the {{domxref("WebTransport")}} interface returns a boolean value that indicates whether the browser supports {{domxref("WebTransport")}} sessions over exclusively reliable transports, such as HTTP/2. Such sessions can't send unreliable datagrams, which need HTTP/3 over QUIC.

## Value

A boolean value: `true` if the browser supports reliable-only `WebTransport` sessions, `false` otherwise.

## Examples

### Basic usage

```js
const url = "https://example.com:4999/webtransport";

async function connect() {
  // WebTransport itself may be unavailable, so check before reading the static property
  if (typeof WebTransport === "undefined") {
    console.log("WebTransport is not supported in this browser.");
    return;
  }

  // Without reliable-only support, the session needs HTTP/3,
  // so it fails on networks that block UDP
  if (!WebTransport.supportsReliableOnly) {
    console.log("This browser can't fall back to a reliable-only session.");
  }

  const transport = new WebTransport(url);

  try {
    await transport.ready;
    console.log("Connected");
  } catch (error) {
    console.error("Connection failed:", error);
  }
}

connect();
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
