---
title: WebSocket()
slug: Web/API/WebSocket/WebSocket
tags:
  - API
  - Constructor
  - Reference
  - Web API
  - WebSocket
browser-compat: api.WebSocket.WebSocket
---
{{APIRef("Web Sockets API")}}

The **`WebSocket()`** constructor returns a new
{{domxref("WebSocket")}} object.

## Syntax

```js
var aWebSocket = new WebSocket(url [, protocols]);
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

### Exceptions thrown

- `SECURITY_ERR`
  - : The port to which the connection is being attempted is being blocked.
- [SyntaxError](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)
  - : The URL is invalid.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
