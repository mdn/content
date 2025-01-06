---
title: "CSP: font-src"
slug: Web/HTTP/Headers/Content-Security-Policy/font-src
page-type: http-csp-directive
browser-compat: http.headers.Content-Security-Policy.font-src
---

{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`font-src`** directive specifies
valid sources for fonts loaded using {{cssxref("@font-face")}}.

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
      <th scope="row">{{CSP("default-src")}} fallback</th>
      <td>
        Yes. If this directive is absent, the user agent will look for the
        <code>default-src</code> directive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: font-src 'none';
Content-Security-Policy: font-src <source-expression-list>;
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
Content-Security-Policy: font-src https://example.com/
```

The following font resource loading is blocked and won't load:

```html
<style>
  @font-face {
    font-family: "MyFont";
    src: url("https://not-example.com/font");
  }
  body {
    font-family: "MyFont";
  }
</style>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{cssxref("@font-face")}}
