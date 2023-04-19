---
title: Vary
slug: Web/HTTP/Headers/Vary
page-type: http-header
browser-compat: http.headers.Vary
---

{{HTTPSidebar}}

The **`Vary`** HTTP response header describes the parts of the request message aside from the method and URL that influenced the content of the response it occurs in. Most often, this is used to create a cache key when [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation) is in use.

The same `Vary` header value should be used on all responses for a given URL, including {{HTTPStatus("304")}} `Not Modified` responses and the "default" response.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Vary: *
Vary: <header-name>, <header-name>, ...
```

## Directives

- \*
  - : Indicates that factors other than request headers influenced the generation of this response. Implies that the response is uncacheable.
- \<header-name>
  - : A comma-separated list of request header names that could have influenced the generation of this response.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Compatibility notes

- [Vary with care – Vary header problems in IE6-9](https://docs.microsoft.com/archive/blogs/ieinternals/vary-with-care)

## See also

- [Understanding The Vary Header - Smashing Magazine](https://www.smashingmagazine.com/2017/11/understanding-vary-header/)
- [Best Practices for Using the Vary Header – fastly.com](https://www.fastly.com/blog/best-practices-using-vary-header)
- [Content negotiation](/en-US/docs/Web/HTTP/Content_negotiation)
