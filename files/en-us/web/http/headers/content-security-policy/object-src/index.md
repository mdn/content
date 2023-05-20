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

To set allowed types for {{HTMLElement("object")}} and {{HTMLElement("embed")}}, use the {{CSP("plugin-types")}} directive.

> **Note:** Elements controlled by `object-src` are perhaps coincidentally
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

One or more sources can be allowed for the `object-src` policy:

```http
Content-Security-Policy: object-src <source>;
Content-Security-Policy: object-src <source> <source>;
```

### Sources

`<source>` can be any one of the values listed in [CSP Source Values](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

Note that this same set of values can be used in all {{Glossary("fetch directive", "fetch directives")}} (and a [number of other directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)).

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
- {{CSP("plugin-types")}}
