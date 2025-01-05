---
title: "CSP: frame-src"
slug: Web/HTTP/Headers/Content-Security-Policy/frame-src
page-type: http-csp-directive
browser-compat: http.headers.Content-Security-Policy.frame-src
---

{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`frame-src`** directive specifies valid sources for nested
browsing contexts loading using elements such as {{HTMLElement("frame")}} and
{{HTMLElement("iframe")}}.

> **Note:** **`frame-src`** allows you to specify where iframes in a page may be loaded from.
> This differs from **`frame-ancestors`**, which allows you to specify what parent source may embed a page.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Directive type</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">Fallback</th>
      <td>
        If this directive is absent, the user agent will look for the
        {{CSP("child-src")}} directive (which falls back to the
        {{CSP("default-src")}} directive).
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: frame-src 'none';
Content-Security-Policy: frame-src <source-expression-list>;
```

This directive may have one of the following values:

- `'none'`
  - : No resources of this type may be loaded. The single quotes are mandatory.
- `<source-expression-list>`

  - : A space-separated list of _source expression_ values. Resources of this type may be loaded if they match any of the given source expressions. For this directive, the following source expression values are applicable:

    - [`<host-source>`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#self)

## Examples

### Violation cases

Given this CSP header:

```http
Content-Security-Policy: frame-src https://example.com/
```

The following {{HTMLElement("iframe")}} is blocked and won't load:

```html
<iframe src="https://not-example.com/"></iframe>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("frame")}} and {{HTMLElement("iframe")}}
- {{CSP("frame-ancestors")}}
