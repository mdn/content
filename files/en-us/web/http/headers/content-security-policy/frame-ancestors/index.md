---
title: "CSP: frame-ancestors"
slug: Web/HTTP/Headers/Content-Security-Policy/frame-ancestors
page-type: http-csp-directive
browser-compat: http.headers.Content-Security-Policy.frame-ancestors
---

{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** directive specifies valid parents that may embed a page using {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, or {{HTMLElement("embed")}}.

Setting this directive to `'none'` is similar to {{HTTPHeader("X-Frame-Options")}}`: deny` (which is also supported in older browsers).

> **Note:** **`frame-ancestors`** allows you to specify what parent source may embed a page.
> This differs from **`frame-src`**, which allows you to specify where iframes in a page may be loaded from.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Directive type</th>
      <td>{{Glossary("Navigation directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} fallback</th>
      <td>No. Not setting this allows anything.</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        This directive is not supported in the {{HTMLElement("meta")}}
        element.
      </th>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: frame-ancestors 'none';
Content-Security-Policy: frame-ancestors <source-expression-list>;
```

This directive may have one of the following values:

- `'none'`
  - : This resource may not be embedded. The single quotes are mandatory.
- `<source-expression-list>`

  - : A space-separated list of _source expression_ values. This resource may be embedded if the embedder matches any of the given source expressions. For this directive, the following source expression values are applicable:

    - [`<host-source>`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#self)

> [!NOTE]
> The `frame-ancestors` directive's syntax is similar to the source list syntax accepted by other directives (e.g., {{CSP("child-src")}}), but it does not fall back to the `default-src` setting. A policy that declares `default-src 'none'` still allows the resource to be embedded by anyone.

## Examples

```http
Content-Security-Policy: frame-ancestors 'none';

Content-Security-Policy: frame-ancestors 'self' https://www.example.org;

Content-Security-Policy: frame-ancestors 'self' https://example.org https://example.com https://store.example.com;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("X-Frame-Options")}}
- {{CSP("frame-src")}} CSP
