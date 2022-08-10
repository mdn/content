---
title: 'CSP: style-src-attr'
slug: Web/HTTP/Headers/Content-Security-Policy/style-src-attr
tags:
  - CSP
  - Content
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Security
  - Style
  - source
  - style-src
  - style-src-attr
browser-compat: http.headers.Content-Security-Policy.style-src-attr
---
{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`style-src-attr`** directive
specifies valid sources for inline styles applied to individual DOM elements.

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
        <p>
          Yes. If this directive is absent, the user agent will look for the {{CSP("style-src")}} directive, and if both of them are
          absent, fallback to <code>default-src</code> directive.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Syntax

One or more sources can be allowed for the `style-src-attr` policy:

```http
Content-Security-Policy: style-src-attr <source>;
Content-Security-Policy: style-src-attr <source> <source>;
```

`style-src-attr` can be used in conjunction with {{CSP("style-src")}}:

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src-attr <source>;
```

### Sources

`<source>` can be any one of the values listed in [CSP Source Values](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

Note that this same set of values can be used in all {{Glossary("fetch directive", "fetch directives")}} (and a [number of other directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)).

## Examples

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("style-src")}}
- {{CSP("style-src-elem")}}
- {{HTTPHeader("Link")}} header
- {{HTMLElement("style")}}, {{HTMLElement("link")}}
- {{cssxref("@import")}}
- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSGroupingRule.insertRule()")}}
- {{domxref("CSSStyleDeclaration.cssText")}}
