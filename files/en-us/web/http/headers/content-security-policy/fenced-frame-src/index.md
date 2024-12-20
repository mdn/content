---
title: "CSP: fenced-frame-src"
slug: Web/HTTP/Headers/Content-Security-Policy/fenced-frame-src
page-type: http-csp-directive
status:
  - experimental
browser-compat: http.headers.Content-Security-Policy.fenced-frame-src
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`fenced-frame-src`** directive specifies valid sources for nested browsing contexts loaded into {{HTMLElement("fencedframe")}} elements.

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
        {{CSP("frame-src")}} directive (which falls back to the
        {{CSP("child-src")}} directive).
      </td>
    </tr>
  </tbody>
</table>

## Syntax

One or more sources can be allowed for the `fenced-frame-src` policy:

```http
Content-Security-Policy: fenced-frame-src <source>;
Content-Security-Policy: fenced-frame-src <source> <source>;
```

A space-separated list of _source expression_ values. Resources of this type may be loaded if they match any of the given source expressions. For this directive, the following source expression values are applicable:

- The [`<host-source>`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#host-source) value `"https:"`
- The [`<scheme-source>`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#scheme-source) value `"https:"`
- The string `"*"`

## Examples

### Violation cases

Given this CSP header:

```http
Content-Security-Policy: fenced-frame-src https://example.com/
```

The following sources will not load in a fenced frame:

- `https://not-example.com/` (domain doesn't match)
- `https://example.org/` (TLD doesn't match)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fenced Frame API](/en-US/docs/Web/API/Fenced_frame_API)
- {{HTMLElement("fencedframe")}}
- {{HTTPHeader("Content-Security-Policy")}}
