---
title: "CSP: object-src"
slug: Web/HTTP/Headers/Content-Security-Policy/object-src
page-type: http-csp-directive
browser-compat: http.headers.Content-Security-Policy.object-src
---

{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}}
**`object-src`** directive specifies valid sources for the
{{HTMLElement("object")}} and {{HTMLElement("embed")}} elements.

> [!NOTE]
> Elements controlled by `object-src` are perhaps coincidentally
> considered legacy HTML elements and aren't receiving new standardized features (such as
> the security attributes `sandbox` or `allow` for
> `<iframe>`). Therefore it is [recommended](https://csp.withgoogle.com/docs/strict-csp.html) to restrict
> this fetch-directive (e.g. explicitly set `object-src 'none'` if possible).

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
Content-Security-Policy: object-src 'none';
Content-Security-Policy: object-src <source-expression-list>;
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
Content-Security-Policy: object-src https://example.com/
```

The following {{HTMLElement("object")}} and {{HTMLElement("embed")}} elements are blocked and won't load:

```html
<embed src="https://not-example.com/flash"></embed>
<object data="https://not-example.com/plugin"></object>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("object")}} and {{HTMLElement("embed")}}
