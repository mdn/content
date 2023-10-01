---
title: "CSP: prefetch-src"
slug: Web/HTTP/Headers/Content-Security-Policy/prefetch-src
page-type: http-csp-directive
status:
  - deprecated
  - non-standard
browser-compat: http.headers.Content-Security-Policy.prefetch-src
---

{{HTTPSidebar}}{{Deprecated_Header}}{{Non-standard_header}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`prefetch-src`** directive specifies valid resources that may
be prefetched or prerendered.

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

One or more sources can be allowed for the `prefetch-src` policy:

```http
Content-Security-Policy: prefetch-src <source>;
Content-Security-Policy: prefetch-src <source> <source>;
```

### Sources

`<source>` can be any one of the values listed in [CSP Source Values](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

Note that this same set of values can be used in all {{Glossary("fetch directive", "fetch directives")}} (and a [number of other directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)).

## Example

### Prefetch resources do not match header

Given a page with the following Content Security Policy:

```http
Content-Security-Policy: prefetch-src https://example.com/
```

Fetches for the following code will return network errors, as the URLs provided do not
match `prefetch-src`'s source list:

```html
<link rel="prefetch" href="https://example.org/" />
<link rel="prerender" href="https://example.org/" />
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
