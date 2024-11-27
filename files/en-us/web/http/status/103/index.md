---
title: 103 Early Hints
slug: Web/HTTP/Status/103
page-type: http-status-code
browser-compat: http.status.103
---

{{HTTPSidebar}}

The HTTP **`103 Early Hints`** [informational response](/en-US/docs/Web/HTTP/Status#informational_responses) may be sent by a server while it is still preparing a response, with hints about the sites and resources that the server expects the final response will link to.
This allows a browser to [preconnect](/en-US/docs/Web/HTML/Attributes/rel/preconnect) to sites or start [preloading](/en-US/docs/Web/HTML/Attributes/rel/preload) resources even before the server has prepared and sent a final response.
Preloaded resources indicated by early hints are fetched by the client as soon as the hints are received.

The early hint response is primarily intended for use with the {{HTTPHeader("Link")}} header, which indicates the resources to be loaded.
It may also contain a [`Content-Security-Policy`](/en-US/docs/Web/HTTP/CSP) header that is enforced while processing the early hint.

A server might send multiple `103` responses, for example, following a redirect.
Browsers only process the first early hints response, and this response must be discarded if the request results in a cross-origin redirect.

> [!NOTE]
> For compatibility and security reasons, it is recommended to [only send HTTP `103 Early Hints` responses over HTTP/2 or later](https://www.rfc-editor.org/rfc/rfc8297#section-3) unless the client is known to handle informational responses correctly.
>
> Most browsers limit support to HTTP/2 or later for this reason. See [browser compatibility](#browser_compatibility) below.
> Despite this, the examples below use HTTP/1.1-style notation as per usual convention.

## Syntax

```http
103 Early Hints
```

## Examples

### Preconnect example

The following `103` early hint response shows an early hint response where the server indicates that the client might want to preconnect to a particular origin (`https://cdn.example.com`).
Just like the HTML [`rel=preconnect`](/en-US/docs/Web/HTML/Attributes/rel/preconnect) attribute, this is a hint that the page is likely to need resources from the target resource's origin, and that the browser may improve the user experience by preemptively initiating a connection to that origin.

```http
103 Early Hint
Link: <https://cdn.example.com>; rel=preconnect, <https://cdn.example.com>; rel=preconnect; crossorigin
```

This example preconnects to `https://cdn.example.com` twice:

- The first connection would be used for loading resources that can be fetched without CORS, such as images.
- The second connection includes the [`crossorigin`](/en-US/docs/Web/HTML/Attributes/crossorigin) attribute and would be used for loading [CORS](/en-US/docs/Web/HTTP/CORS)-protected resources, such as fonts.

CORS-protected resources must be fetched over a completely separate connection. If you only need one type of resource from an origin then you only need to preconnect once.

Subsequently the server sends the final response.
This includes a crossorigin font preload and an `<img>` loaded from the additional origin.

```http
200 OK
Content-Type: text/html

<!doctype html>
...
<link rel="preload" href="https://cdn.example.com/fonts/my-font.woff2" as="font" type="font/woff2" crossorigin>
...
<img src="https://cdn.example.com/images/image.jpg" alt="">
...
```

### Preload example

The following `103` early hint response indicates a stylesheet `style.css` might be needed by the final response.

```http
103 Early Hint
Link: </style.css>; rel=preload; as=style
```

Subsequently the server sends the final response.
This includes a link to the stylesheet, which may already have been preloaded from the early hint.

```http
200 OK
Content-Type: text/html

<!doctype html>
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
The stylesheet will be preloaded if the origin matches.

The final response might set the CSP to `none`, as shown below.
The stylesheet has already been preloaded, but will not be used when rendering the page.

```http
200 OK
Content-Security-Policy: style-src: none;
Content-Type: text/html

<!doctype html>
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
- [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS)
- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
- [`rel="preconnect"`](/en-US/docs/Web/HTML/Attributes/rel/preconnect) ({{htmlelement("link")}} attribute)
- [`rel="preload"`](/en-US/docs/Web/HTML/Attributes/rel/preload) ({{htmlelement("link")}} attribute)
- [`fetchpriority`](/en-US/docs/Web/HTML/Element/link#fetchpriority) ({{htmlelement("link")}} attribute)
- [Early Hints update: How Cloudflare, Google, and Shopify are working together to build a faster Internet for everyone](https://blog.cloudflare.com/early-hints-performance/) from the Cloudflare blog
