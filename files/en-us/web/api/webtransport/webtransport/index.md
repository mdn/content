---
title: "WebTransport: WebTransport() constructor"
short-title: WebTransport()
slug: Web/API/WebTransport/WebTransport
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.WebTransport.WebTransport
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`WebTransport()`** constructor creates a new
{{domxref("WebTransport")}} object instance.

{{AvailableInWorkers}}

## Syntax

```js-nolint
new WebTransport(url, options)
```

### Parameters

- `url`
  - : A string representing the URL of the HTTP/3 server to connect to. The scheme needs to be HTTPS, and the port number needs to be explicitly specified.
- `options` {{optional_inline}}
  - : An object containing the following properties:
    - `serverCertificateHashes` {{optional_inline}}
      - : An array of `WebTransportHash` objects. If specified, it allows the website to connect to a server by authenticating the certificate against the expected certificate hash instead of using the Web public key infrastructure (PKI). This feature allows Web developers to connect to WebTransport servers that would normally find obtaining a publicly trusted certificate challenging, such as hosts that are not publicly routable, or ephemeral hosts like virtual machines.

`WebTransportHash` objects contain two properties:

- `algorithm`
  - : A string representing the algorithm to use to verify the hash. Any hash using an unknown algorithm will be ignored.
- `value`
  - : A `BufferSource` representing the hash value.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if `serverCertificateHashes` is specified but the transport protocol does not support this feature.
- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if the specified `url` is invalid, if the scheme is not HTTPS, or if the URL includes a fragment.

## Examples

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  // ...
}

// ...

async function closeTransport(transport) {
  // Respond to connection closing
  try {
    await transport.closed;
    console.log(`The HTTP/3 connection to ${url} closed gracefully.`);
  } catch (error) {
    console.error(`The HTTP/3 connection to ${url} closed due to ${error}.`);
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
