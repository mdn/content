---
title: "CSP: manifest-src"
slug: Web/HTTP/Headers/Content-Security-Policy/manifest-src
page-type: http-csp-directive
browser-compat: http.headers.Content-Security-Policy.manifest-src
---

{{HTTPSidebar}}

The HTTP
{{HTTPHeader("Content-Security-Policy")}}`: manifest-src`
directive specifies which [manifest](/en-US/docs/Web/Manifest) can be applied
to the resource.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>3</td>
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
Content-Security-Policy: manifest-src 'none';
Content-Security-Policy: manifest-src <source-expression-list>;
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
Content-Security-Policy: manifest-src https://example.com/
```

The following {{HTMLElement("link")}} is blocked and won't load:

```html
<link rel="manifest" href="https://not-example.com/manifest" />
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- [Web app manifest](/en-US/docs/Web/Manifest)
- {{HTMLElement("link")}}
