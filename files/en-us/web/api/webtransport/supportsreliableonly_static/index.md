---
title: "WebTransport: supportsReliableOnly static property"
short-title: supportsReliableOnly
slug: Web/API/WebTransport/supportsReliableOnly_static
page-type: web-api-static-property
browser-compat: api.WebTransport.supportsReliableOnly_static
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`supportsReliableOnly`** static read-only property of the {{domxref("WebTransport")}} interface returns a boolean value that indicates whether the browser supports {{domxref("WebTransport")}} sessions over exclusively reliable transports, such as HTTP/2, or whether it also supports unreliable connections (e.g., HTTP/3 over QUIC (UDP)).

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

  // Can this browser fall back to a reliable-only (HTTP/2) session?
  const canUseReliableOnly = WebTransport.supportsReliableOnly;
  console.log(`Reliable-only sessions supported: ${canUseReliableOnly}`);

  // If the app can tolerate reliable-only transport, don't demand unreliable
  // delivery, so the browser is free to fall back when HTTP/3 isn't available.
  const transport = new WebTransport(url, {
    requireUnreliable: !canUseReliableOnly,
  });

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
