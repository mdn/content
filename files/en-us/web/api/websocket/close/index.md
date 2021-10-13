---
title: WebSocket.close()
slug: Web/API/WebSocket/close
tags:
  - API
  - Method
  - Reference
  - Web API
  - WebSocket
browser-compat: api.WebSocket.close
---
{{APIRef("Web Sockets API")}}

The **`WebSocket.close()`** method closes the
{{domxref("WebSocket")}} connection or connection attempt, if any. If the connection is
already `CLOSED`, this method does nothing.

## Syntax

```js
WebSocket.close();
```

```js
WebSocket.close(code);
```

```js
WebSocket.close(reason);
```

```js
WebSocket.close(code, reason);
```

### Parameters

- `code` {{optional_inline}}
  - : A numeric value indicating the status code explaining why the connection is being
    closed. If this parameter is not specified, a default value of 1005 is assumed. See
    the [list of status codes](/en-US/docs/Web/API/CloseEvent/code) of
    {{domxref("CloseEvent")}} for permitted values.
- `reason` {{optional_inline}}
  - : A human-readable string explaining why the connection is closing. This string must
    be no longer than 123 bytes of UTF-8 text (**not** characters).

### Exceptions thrown

- `INVALID_ACCESS_ERR`
  - : An invalid `code` was specified.
- `SYNTAX_ERR`
  - : The `reason` string is too long or contains unpaired surrogates.

> **Note:** In Gecko, this method didn't support any parameters prior to
> Gecko 8.0 {{geckoRelease("8.0")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
