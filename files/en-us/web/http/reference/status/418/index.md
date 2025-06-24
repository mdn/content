---
title: 418 I'm a teapot
slug: Web/HTTP/Reference/Status/418
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc2324#section-2.3.2
---

{{HTTPSidebar}}

The HTTP **`418 I'm a teapot`** status response code indicates that the server refuses to brew coffee because it is, permanently, a teapot.
A combined coffee/tea pot that is temporarily out of coffee should instead return {{HTTPStatus("503")}}.
This error is a reference to Hyper Text Coffee Pot Control Protocol, defined as an April Fools' jokes in 1998 and 2014.

Some websites use this response for requests they do not wish to handle, such as automated queries.

## Status

```http
418 I'm a teapot
```

## Examples

### Receiving a `418 I'm a teapot` response

In this example, a request to a teapot server returns a `418 I'm a teapot` response.
The response indicates that the server refuses to brew coffee because it is, permanently, a teapot.

```http
HTTP/1.1 418 I'm a teapot
Content-Type: text/plain
Date: Fri, 21 Jun 2024 14:18:33 GMT
Content-Length: 37

I'm a teapot, I cannot brew coffee ☕️🫖
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Reference/Status)
- [Wikipedia: Hyper Text Coffee Pot Control Protocol](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol)
