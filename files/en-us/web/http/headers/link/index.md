---
title: Link
slug: Web/HTTP/Headers/Link
page-type: http-header
browser-compat: http.headers.Link
---

{{HTTPSidebar}}

The HTTP **`Link`** [entity header](/en-US/docs/Glossary/Entity_header) field provides a means for serializing one or more links in HTTP headers.
This allows the server to point a client to another resource containing metadata about the requested resource.
This header has the same semantics as the HTML {{HTMLElement("link")}} element.
One benefit of using the `Link` header is that the browser can start preconnecting or preloading resources before the HTML itself is fetched and processed.

In practice, most [link types](/en-US/docs/Web/HTML/Attributes/rel) don't have an effect in the browser.
For example, the `icon` relation only works in HTML, and `stylesheet` does not work reliably across browsers (only in Firefox).
The only relations that work reliably are `preconnect` and `preload`, which can be combined with {{HTTPStatus("103", "103 Early Hints")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Link: <uri-reference>; param1=value1; param2="value2"
```

- `<uri-reference>`
  - : The URI reference, must be enclosed between `<` and `>` and {{Glossary("Percent-encoding", "percent-encoded")}}.

### Parameters

The link header contains parameters, which are separated with `;` and are equivalent to attributes of the {{HTMLElement("link")}} element.
Values can be both quoted or unquoted based on [field value component rules](https://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.6), so `x=y` is equivalent to `x="y"`.

## Examples

The URI (absolute or relative) must be enclosed between angle brackets (`<` and `>`):

```http example-good
Link: <https://example.com>; rel="preconnect"
```

```http example-bad
Link: https://bad.example; rel="preconnect"
```

### Encoding URLs

The URI (absolute or relative) must {{Glossary("Percent-encoding", "percent-encode")}} character codes greater than 255:

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

### Pagination through links

The `Link` header can provide pagination information to a client, which is commonly used to access resources programmatically:

```http
Link: <https://api.example.com/issues?page=2>; rel="prev", <https://api.example.com/issues?page=4>; rel="next", <https://api.example.com/issues?page=10>; rel="last", <https://api.example.com/issues?page=1>; rel="first"
```

In this case, `rel="prev"` and `rel="next"` show link relations for previous and next pages, and there are `rel="last"` and `rel="first"` parameters providing first and last pages of search results.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPStatus("103", "103 Early Hints")}}
- {{HTMLElement("link")}}
- [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml) IANA registry
