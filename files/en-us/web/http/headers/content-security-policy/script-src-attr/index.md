---
title: 'CSP: script-src-attr'
slug: Web/HTTP/Headers/Content-Security-Policy/script-src-attr
tags:
  - CSP
  - Content
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Script
  - Security
  - script-src
  - source
browser-compat: http.headers.Content-Security-Policy.script-src-attr
---
{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`script-src-attr`** directive specifies valid sources for
JavaScript inline event handlers. This includes only inline script event handlers like
`onclick`, but not URLs loaded directly into {{HTMLElement("script")}}
elements.

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
        Yes.
        If this directive is absent, the user agent will look for the {{CSP("script-src")}} directive, and if both of them are absent, fallback to <code>default-src</code> directive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

One or more sources can be allowed for the `script-src-attr` policy:

```http
Content-Security-Policy: script-src-attr <source>;
Content-Security-Policy: script-src-attr <source> <source>;
```

`script-src-attr` can be used in conjunction with {{CSP("script-src")}}:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-attr <source>;
```

### Sources

`<source>` can be any one of the values listed in [CSP Source Values](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

Note that this same set of values can be used in all {{Glossary("fetch directive", "fetch directives")}} (and a [number of other directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)).

## Examples

### Fallback to script-src

If `script-src-attr` is absent, User Agent falls back to
the {{CSP("script-src")}} directive, and if that is absent as well, to
{{CSP("default-src")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("script")}}
- {{CSP("script-src")}}
- {{CSP("script-src-elem")}}
