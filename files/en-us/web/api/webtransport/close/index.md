---
title: "WebTransport: close() method"
short-title: close()
slug: Web/API/WebTransport/close
page-type: web-api-instance-method
browser-compat: api.WebTransport.close
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`close()`** method of the {{domxref("WebTransport")}} interface closes an ongoing WebTransport session.

## Syntax

```js-nolint
close(info)
```

### Parameters

- `info` {{optional_inline}}
  - : An object containing the following properties:
    - `closeCode`
      - : A number representing the error code for the error.
    - `reason`
      - : A string representing the reason for closing the `WebTransport`.

### Return value

`undefined`.

### Exceptions

- {{domxref("WebTransportError")}}
  - : Thrown if `close()` is invoked while the WebTransport is in the process of connecting.

## Examples

```js
const url = "https://example.com:4999/wt";
// Initialize transport connection
const transport = new WebTransport(url);

// …

transport.close({
  closeCode: 17,
  reason: "CloseButtonPressed",
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
