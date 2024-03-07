---
title: "WebTransport: WebTransport() constructor"
short-title: WebTransport()
slug: Web/API/WebTransport/WebTransport
page-type: web-api-constructor
browser-compat: api.WebTransport.WebTransport
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`WebTransport()`** constructor creates a new {{domxref("WebTransport")}} object instance.

## Syntax

```js-nolint
new WebTransport(url)
new WebTransport(url, options)
```

### Parameters

- `url`
  - : A string representing the URL of the HTTP/3 server to connect to.
    The scheme must be HTTPS, and the port number needs to be explicitly specified.
- `options` {{optional_inline}}

  - : An object that may have the following properties:

    - `allowPooling` {{optional_inline}}
      - : A boolean value.
        If `true`, the network connection for this {{domxref("WebTransport")}} can be shared with a pool of other HTTP/3 sessions.
        By default the value is `false`, and the connection cannot be shared.
    - `congestionControl` {{optional_inline}}
      - : A string indicating the application's preference that the congestion control algorithm used when sending data over this connection be tuned for either throughput or low-latency.
        This is a hint to the user agent.
        The allowed values are: `default` (default), `throughput`, and `low-latency`.
    - `requireUnreliable` {{optional_inline}}
      - : A boolean value.
        If `true`, the connection cannot be established over HTTP/2 if an HTTP/3 connection is not possible.
        By default the value is `false`.
    - `serverCertificateHashes` {{optional_inline}}

      - : An array of objects, each defining the hash value of a server certificate along with the name of the algorithm that was used to generate it.
        This option is only supported for transports using dedicated connections (`allowPooling` is `false`).

        If specified, the browser will attempt to authenticate the certificate provided by the server against the provided certificate hash(es) in order to connect, instead of using the Web public key infrastructure (PKI).
        If any hashes match, the browser knows that the server has possession of a trusted certificate and will connect as normal.
        If empty the user agent uses the same PKI certificate verification procedures it would use for a normal fetch operation.

        This feature allows developers to connect to WebTransport servers that would normally find obtaining a publicly trusted certificate challenging, such as hosts that are not publicly routable, or ephemeral hosts like virtual machines.

        > **Note:** The web application might typically fetch the hashes from a trusted intermediary.
        > For example, you might use a cloud provider to provision VMs that run your WebTransport servers.
        > The provider has trusted access to the server and can request its certificate, generate hashes, and provide these to the application via an API (which is mediated via PKI), or a cloud console.
        > The web application can now connect directly to the VM-hosted server using the supplied hashes, even though the VM itself does not have a long-lived TLS certificate.

        The certificate must be an X.509v3 certificate that has a validity period of less that 2 weeks, and the current time must be within that validity period.
        The format of the public key in the certificate depends on the implementation, but must minimally include ECDSA with the secp256r1 (NIST P-256) named group, and must not include RSA keys.
        An ECSDA key is therefore an interoperable default public key format.
        A user agent may add further requirements; these will be listed in the [browser compatibility](#browser_compatibility) section if known.

        Each object in the array has the following properties:

        - `algorithm`

          - : A string with the value: `sha-256` (case-insensitive).
            Note that this string represents the algorithm to use to verify the hash, and that any hash using an unknown algorithm will be ignored.
            At time of writing, `SHA-256` is the only hash algorithm listed in the specification.

        - `value`
          - : An [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) or {{jsxref("TypedArray")}} containing the hash value.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if `serverCertificateHashes` is specified but the transport protocol does not support this feature.
- `SyntaxError`
  - : Thrown if the specified `url` is invalid, if the scheme is not HTTPS, or if the URL includes a fragment.
- `TypeError`
  - : Thrown if a `serverCertificateHashes` is set for a non-dedicated connection (in other words, if `allowPooling` is `true`).

## Examples

### Connecting with default options

This example shows how you might construct a `WebTransport` using just a URL, wait for it to connect, and then monitor the transport and report when it has closed.

First we define an `async` method that takes an URL and uses it to construct the `WebTransport` object.
No constructor options are specified, so the connection uses default options: dedicated connection, support for unreliable transports is not required, default congestion control, and normal Web PKI authentication with the server.
Note that the scheme needs to be HTTPS, and the port number needs to be explicitly specified.

Once the {{domxref("WebTransport.ready")}} promise fulfills, you can start using the connection.

```js
async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;
  return transport;
}
```

You can respond to the connection closing by waiting for the {{domxref("WebTransport.closed")}} promise to fulfill.
Errors returned by `WebTransport` operations are of type {{domxref("WebTransportError")}}, and contain additional data on top of the standard {{domxref("DOMException")}} set.

The `closeTransport()` method below shows how.
Within a `try...catch` block it uses `await` to wait for the `closed` promise to fulfill or reject, and then reports whether or not the connection closed intentionally or due to error.

```js
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

We might call the asynchronous functions above in their own asynchronous function, as shown below.

```js
// Use the transport
async function useTransport(url) {
  const transport = await initTransport(url);

  // Use the transport object to send and receive data
  // ...

  // When done, close the transport
  await closeTransport(transport);
}

const url = "https://example.com:4999/wt";
useTransport(url);
```

### Connecting with server certificate hashes

The example below shows the code to construct a `WebTransport` that specifies the `serverCertificateHashes` option.
In this case the array contains two hashes, both encoded using the SHA-256 algorithm.
Note that the `allowPooling` option must be `false` (the default).

```js
const transport = new WebTransport(url, {
  serverCertificateHashes: [
    {
      algorithm: "sha-256",
      value: "5a155927eba7996228455e4721e6fe5f739ae15db6915d765e5db302b4f8a274",
    },
    {
      algorithm: "sha-256",
      value: "7d7094e7a8d3097feff3b5ee84fa5cab58e4de78f38bcfdee5ea8b51f4bfa8fd",
    },
  ],
});
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
