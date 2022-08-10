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
browser-compat: http.headers.Content-Security-Policy.frame-src
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

```http
Content-Security-Policy: frame-src <source>;
Content-Security-Policy: frame-src <source> <source>;
```

### Sources

`<source>` can be any one of the values listed in [CSP Source Values](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

Note that this same set of values can be used in all {{Glossary("fetch directive", "fetch directives")}} (and a [number of other directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)).

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
