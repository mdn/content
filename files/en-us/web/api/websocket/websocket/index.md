---
title: "WebSocket: WebSocket() constructor"
short-title: WebSocket()
slug: Web/API/WebSocket/WebSocket
page-type: web-api-constructor
browser-compat: api.WebSocket.WebSocket
---

{{APIRef("Web Sockets API")}}

The **`WebSocket()`** constructor returns a new
{{domxref("WebSocket")}} object.

## Syntax

```js-nolint
new WebSocket(url)
new WebSocket(url, protocols)
```

### Parameters

- `url`
  - : The URL to which to connect; this should be the URL to which the WebSocket server
    will respond.
- `protocols` {{optional_inline}}

  - : Either a single protocol string or an array of protocol strings. These strings are
    used to indicate sub-protocols, so that a single server can implement multiple
    WebSocket sub-protocols (for example, you might want one server to be able to handle
    different types of interactions depending on the specified `protocol`).

    If it is omitted, an empty array is used by default, i.e. `[]`.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if:
    - parsing of [`url`](#url) fails
    - [`url`](#url) has a scheme other than `ws` or `wss`
    - [`url`](#url) has a [fragment](/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#fragment)
    - any of the values in [`protocols`](#protocols) occur more than once, or otherwise fail to match the requirements for elements that comprise the value of [`Sec-WebSocket-Protocol`](/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism#sec-websocket-protocol) fields as defined by the WebSocket Protocol specification

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (the WebSocket Protocol specification)
