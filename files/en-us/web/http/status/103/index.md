---
title: 103 Early Hints
slug: Web/HTTP/Status/103
page-type: http-status-code
status:
  - experimental
browser-compat: http.status.103
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP **`103 Early Hints`** [information response](/en-US/docs/Web/HTTP/Status#information_responses) may be sent by a server while it is still preparing a response, with hints about the resources that the server is expecting the final response will link.
This allows a browser to start [preloading](/en-US/docs/Web/HTML/Attributes/rel/preload) resources even before the server has prepared and sent that final response.

The early hint response is primarily intended for use with the {{HTTPHeader("Link")}} header, which indicates the resources to be loaded.
It may also contain a [`Content-Security-Policy`](/en-US/docs/Web/HTTP/CSP) header that is enforced while processing the early hint.

A server might send multiple `103` responses, for example, following a redirect.
Browsers only process the first early hint response, and this response must be discarded if the request results in a cross-origin redirect.
Preloaded resources from the early hint are effectively pre-pended to the `Document`'s head element, and then followed by the resources loaded in the final response.

## Syntax

```http
103 Early Hints
```

## Examples

### Basic example

The following `103` early hint response indicates a stylesheet `style.css` might be preloaded by the final response.

```http
103 Early Hint
Link: </style.css>; rel=preload; as=style
```

Subsequently the server sends the final response.
This includes a link to the stylesheet, which may already have preloaded.

```http
200 OK
Content-Type: text/html

<!DOCTYPE html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

### Early hint response with CSP

The following example shows the same early hint response but with a `Content-Security-Policy` header included.

```http
103 Early Hint
Content-Security-Policy: style-src: self;
Link: </style.css>; rel=preload; as=style
```

The early response restricts preloading to the same origin as the request.
The stylesheet will preload if the origin matches.

The final response might set the CSP to `none`, as shown below.
The stylesheet has already preloaded, but will not be used when rendering the page.

```http
200 OK
Content-Security-Policy: style-src: none;
Content-Type: text/html

<!DOCTYPE html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Link")}}
