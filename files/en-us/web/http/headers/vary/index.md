---
title: Vary
slug: Web/HTTP/Headers/Vary
page-type: http-header
browser-compat: http.headers.Vary
---

{{HTTPSidebar}}

The HTTP **`Vary`** {{Glossary("response header")}} describes the parts of the request message (aside from the method and URL) that influenced the content of the response it occurs in.
Including a `Vary` header ensures that responses are separately cached based on the headers listed in the `Vary` field.
Most often, this is used to create a cache key when [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation) is in use.

The same `Vary` header value should be used on all responses for a given URL, including {{HTTPStatus("304")}} `Not Modified` responses and the "default" response.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

Either `*` as a wildcard, or one or more header names in a comma-separated list:

```http
Vary: *
Vary: <header-name>, …, <header-nameN>
```

## Directives

- `*` (wildcard)
  - : Factors other than request headers influenced the generation of this response. Implies that the response is uncacheable.
- `<header-name>`
  - : A request header name that could have influenced the generation of this response.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Content negotiation](/en-US/docs/Web/HTTP/Content_negotiation)
- [HTTP caching: Vary](/en-US/docs/Web/HTTP/Caching#vary)
- [Understanding The Vary Header](https://www.smashingmagazine.com/2017/11/understanding-vary-header/) on smashingmagazine.com (2017)
- [Best Practices for Using the Vary Header](https://www.fastly.com/blog/best-practices-using-vary-header) on fastly.com
