---
title: "WebTransportError: WebTransportError() constructor"
short-title: WebTransportError()
slug: Web/API/WebTransportError/WebTransportError
page-type: web-api-constructor
browser-compat: api.WebTransportError.WebTransportError
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`WebTransportError()`** constructor creates a new {{domxref("WebTransportError")}} object instance.

## Syntax

```js-nolint
new WebTransportError(init)
```

### Parameters

- `init` {{optional_inline}}
  - : An object containing the following properties:
    - `message`
      - : A string describing the error that has occurred.
    - `streamErrorCode`
      - : A number in the range 0-255 indicating the application protocol error code for this error.

## Examples

A developer would not use this constructor manually. A new `WebTransportError` object is constructed when an error related to WebTransport occurs, for example a server error or network connection problem.

```js
const url = "not-a-url";

async function initTransport(url) {
  try {
    // Initialize transport connection
    const transport = new WebTransport(url);

    // The connection can be used once ready fulfills
    await transport.ready;

    // …
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
