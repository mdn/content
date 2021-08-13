---
title: 'CSP: object-src'
slug: Web/HTTP/Headers/Content-Security-Policy/object-src
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Object
  - Reference
  - Security
  - object-src
  - source
browser-compat: http.headers.csp.Content-Security-Policy.object-src
---
{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}}
**`object-src`** directive specifies valid sources for the
{{HTMLElement("object")}}, {{HTMLElement("embed")}}, and {{HTMLElement("applet")}}
elements.

To set allowed types for {{HTMLElement("object")}}, {{HTMLElement("embed")}}, and
{{HTMLElement("applet")}} elements, use the {{CSP("plugin-types")}} directive.

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

One or more sources can be allowed for the object-src policy:

```
Content-Security-Policy: object-src <source>;
Content-Security-Policy: object-src <source> <source>;
```

### Sources

{{page("Web/HTTP/Headers/Content-Security-Policy/connect-src", "Sources")}}

## Examples

### Violation cases

Given this CSP header:

```
Content-Security-Policy: object-src https://example.com/
```

The following {{HTMLElement("object")}}, {{HTMLElement("embed")}}, and
{{HTMLElement("applet")}} elements are blocked and won't load:

```html
<embed src="https://not-example.com/flash"></embed>
<object data="https://not-example.com/plugin"></object>
<applet archive="https://not-example.com/java"></applet>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("object")}}, {{HTMLElement("embed")}}, and {{HTMLElement("applet")}}
- {{CSP("plugin-types")}}
