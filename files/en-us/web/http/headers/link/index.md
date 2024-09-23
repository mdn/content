---
title: Link
slug: Web/HTTP/Headers/Link
page-type: http-header
browser-compat: http.headers.Link
---

{{HTTPSidebar}}

The HTTP **`Link`** [entity header](/en-US/docs/Glossary/Entity_header) field provides a means for serializing one or more links in HTTP headers. This header has the same semantics as the HTML {{HTMLElement("link")}} element. The benefit of using the `Link` header is that the browser can start preconnecting or preloading resources before the HTML itself is fetched and processed.

In practice, most [link types](/en-US/docs/Web/HTML/Attributes/rel) don't have an effect in the HTTP header. For example, the `icon` relation only works in HTML, and `stylesheet` does not work reliably across browsers (only in Firefox). The only relations that work reliably are `preconnect` and `preload`, which can be combined with {{HTTPStatus(103, "103 Early Hints")}}.

## Syntax

```http
Link: <uri-reference>; param1=value1; param2="value2"
```

- `<uri-reference>`
  - : The URI reference, must be enclosed between `<` and `>` and {{Glossary("Percent-encoding", "percent-encoded")}}.

### Parameters

The link header contains parameters, which are separated with `;` and are equivalent to attributes of the {{HTMLElement("link")}} element.

## Examples

The URI (absolute or relative) must be enclosed between `<` and `>`:

```http example-good
Link: <https://example.com>; rel="preconnect"
```

```http example-bad
Link: https://bad.example; rel="preconnect"
```

### Encoding URLs

The URI (absolute or relative) must encode char codes greater than 255:

```http example-good
Link: <https://example.com/%E8%8B%97%E6%9D%A1>; rel="preconnect"
```

```http example-bad
Link: <https://example.com/苗条>; rel="preconnect"
```

### Specifying multiple links

You can specify multiple links separated by commas, for example:

```http
Link: <https://one.example.com>; rel="preconnect", <https://two.example.com>; rel="preconnect", <https://three.example.com>; rel="preconnect"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPStatus(103, "103 Early Hints")}}
- {{HTMLElement("link")}}
