---
title: 'CSP: frame-src'
slug: Web/HTTP/Headers/Content-Security-Policy/frame-src
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - Frame
  - HTTP
  - Reference
  - Security
  - frame-src
  - source
browser-compat: http.headers.csp.Content-Security-Policy.frame-src
---
{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`frame-src`** directive specifies valid sources for nested
browsing contexts loading using elements such as {{HTMLElement("frame")}} and
{{HTMLElement("iframe")}}.

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

One or more sources can be allowed for the `frame-src` policy:

```
Content-Security-Policy: frame-src <source>;
Content-Security-Policy: frame-src <source> <source>;
```

### Sources

{{page("Web/HTTP/Headers/Content-Security-Policy/connect-src", "Sources")}}

## Examples

### Violation cases

Given this CSP header:

```
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
